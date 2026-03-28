class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]
  before_action :get_todays_person, :require_auth

  def load_content
    @people = Person.order(:quickname)

    guesses = GameStats.todays_guesses @user_id

    @prev_people = Person.where quickname: guesses
    @prev_people = guesses.map { |q| @prev_people.find { |p| p.quickname == q } }.compact.reverse

    @nb_tries = guesses.length
    @won = @prev_people.include? @todays_person

    respond_to do |format|
      format.turbo_stream {
        render turbo_stream: turbo_stream.replace("temp-loading", template: "game/index")
      }
    end
  end

  def submit_guess
    guesses = GameStats.todays_guesses @user_id

    @person = Person.find_by quickname: params[:quickname]

    respond_to do |format|
      if guesses.include? @todays_person.quickname
        flash.now[:error] = "Partie terminée"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif @person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif guesses.include? @person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        GameStats.add_guess_for(@user_id, @person.quickname)
        @nb_tries = guesses.length + 1

        format.turbo_stream
      end
    end
  end

  private

  def get_todays_person
    @todays_person = TodaysPersonService.get_daily
  end

  def require_auth
    @user_id = params[:user_id]
    unless @user_id.present?
      redirect_to root_path, alert: "Authentication is required."
    end
  end
end
