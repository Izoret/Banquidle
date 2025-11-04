class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]

  def index
    @people = Person.joins(:first_name, :last_name).select("quickname, first_names.content AS first_name_content, last_names.content AS last_name_content")

    @todays_person = TodaysPersonService.call

    username = "<get this from discord user>"
    unless username
      throw "Username Discord introuvable."
    end
    u_sess = DailyGameStats.new username

    prev_guesses = u_sess.stats[:guesses]

    @prev_people = Person.where quickname: prev_guesses
    @prev_people = prev_guesses.map { |q| @prev_people.find { |p| p.quickname == q } }.compact.reverse

    @nb_tries = prev_guesses.length
  end

  def submit_guess
    @todays_person = TodaysPersonService.call

    username = "<get this from discord user>"
    unless username
      throw "Username Discord introuvable."
    end
    u_sess = DailyGameStats.new username

    prev_guesses = u_sess.stats[:guesses]

    @person = Person.find_by quickname: params[:quickname]

    respond_to do |format|
      if @person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif prev_guesses.include? @person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        u_sess.add_guess @person.quickname
        @nb_tries = prev_guesses.length + 1

        format.turbo_stream
      end
    end
  end
end
