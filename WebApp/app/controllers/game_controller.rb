class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]
  before_action :get_todays_person, :require_auth

  def load_content
    previous_guesses = GameStats.todays_guesses @user_id
    previous_people = Person.where quickname: previous_guesses
    previous_quicknames = previous_guesses.map { |q| previous_people.find { |p| p.quickname == q } }.compact.reverse

    available_people = Person.where.not(quickname: previous_guesses).order(:quickname)

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(
          "temp-loading",
          template: "game/index",
          locals: {
            nb_tries: previous_guesses.length,
            available_people: available_people,
            previous_picks: previous_quicknames,
            won: previous_quicknames.include?(@todays_person),
            todays_person: @todays_person
          }
        )
      end
    end
  end

  def submit_guess
    guesses = GameStats.todays_guesses @user_id

    person = Person.find_by quickname: params[:quickname]

    respond_to do |format|
      if guesses.include? @todays_person.quickname
        flash.now[:error] = "Partie terminée"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif guesses.include? person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        GameStats.add_guess(@user_id, person.quickname)

        format.turbo_stream do
          render locals: {
            guessed_person: person,
            todays_person: @todays_person,
            nb_tries: guesses.length + 1,
            available_people_left: Person.where.not(quickname: (GameStats.todays_guesses @user_id)).order(:quickname)
          }
        end
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
