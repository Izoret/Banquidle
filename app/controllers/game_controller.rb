class GameController < ApplicationController
  def index
    @people = Person.joins(:first_name, :last_name).select("quickname, first_names.content AS first_name_content, last_names.content AS last_name_content")

    if session[:today]
      @todays_person = Person.find_by(quickname: session[:today])
    else
      @todays_person = get_todays_person
      session[:today] = @todays_person.quickname
    end

    prev_guesses = session[:guesses] || []
    @prev_people = Person.where(quickname: prev_guesses)
    @prev_people = prev_guesses.map { |q| @prev_people.find { |p| p.quickname == q } }.compact.reverse

    @nb_tries = prev_guesses.length
  end

  def submit_guess
    @todays_person = get_todays_person

    prev_guesses = session[:guesses] || []

    @person = Person.find_by(quickname: params[:quickname])

    respond_to do |format|
      if @person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif prev_guesses.include? @person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        prev_guesses << @person.quickname
        session[:guesses] = prev_guesses

        @nb_tries = prev_guesses.length
        format.turbo_stream
      end
    end
  end

  require "digest"
  private def get_todays_person
    quicknames = Person.order(:quickname).pluck(:quickname)
    hex = Digest::MD5.hexdigest(Date.today.to_s)
    idx = hex.to_i(16) % quicknames.size
    selected_quickname = quicknames[idx]
    Person.find_by(quickname: selected_quickname)
  end
end
