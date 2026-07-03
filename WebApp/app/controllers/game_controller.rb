class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]
  before_action :require_auth

  def load_content
    previous_guesses = GameStatsService.todays_guesses @user_id
    previous_people = Person.where quickname: previous_guesses
    previous_quicknames = previous_guesses.map { |q| previous_people.find { |p| p.quickname == q } }.compact.reverse

    todays = TodaysPersonService.get_daily_target
    available_people = Person.where.not(quickname: previous_guesses).where.not(quickname: TodaysPersonService.get_daily_banned_quicknames).order(:quickname)

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(
          "temp-loading",
          template: "game/index",
          locals: {
            nb_tries: previous_guesses.length,
            available_people: available_people,
            previous_picks: previous_quicknames,
            won: previous_quicknames.include?(todays),
            todays_person: todays
          }
        )
      end
    end
  end

  def submit_guess
    guesses = GameStatsService.todays_guesses @user_id

    todays = TodaysPersonService.get_daily_target

    person = Person.find_by quickname: params[:quickname]

    respond_to do |format|
      if guesses.include? todays.quickname
        flash.now[:error] = "Partie terminée"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif guesses.include? person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif TodaysPersonService.get_daily_banned_quicknames.include? person.quickname
        flash.now[:alert] = "Bah chef il est ban ajd lui 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        GameStatsService.add_guess(@user_id, person.quickname)

        format.turbo_stream do
          render locals: {
            guessed_person: person,
            todays_person: todays,
            nb_tries: guesses.length + 1,
            available_people_left: Person.where.not(quickname: (GameStatsService.todays_guesses @user_id)).order(:quickname)
          }
        end
      end
    end
  end

  private

  def require_auth
    @user_id = params[:user_id]
    unless @user_id.present?
      redirect_to root_path, alert: "Authentication is required."
    end
  end
end
