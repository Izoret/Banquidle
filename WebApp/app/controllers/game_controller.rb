class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]
  before_action :require_auth

  def load_content
    fqdns_already_tried = GameStatsService.todays_guesses @user_id
    people_already_tried = fqdns_already_tried.map { |q| Person.find { |p| p.fqdn == q } }.compact.reverse

    todays = TodaysPersonService.get_daily_target
    banned = TodaysPersonService.get_daily_banned_fqdns

    available_people = Person.where.not(fqdn: fqdns_already_tried + banned).order(:fqdn)

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(
          "temp-loading",
          template: "game/index",
          locals: {
            nb_tries: fqdns_already_tried.length,
            available_people: available_people,
            previous_picks: people_already_tried,
            won: people_already_tried.include?(todays),
            todays_person: todays,
            banned_people: banned
          }
        )
      end
    end
  end

  def submit_guess
    guesses = GameStatsService.todays_guesses @user_id

    todays = TodaysPersonService.get_daily_target

    person = Person.find_by fqdn: params[:fqdn]

    respond_to do |format|
      if guesses.include? todays.fqdn
        flash.now[:error] = "Partie terminée"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif guesses.include? person.fqdn
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif TodaysPersonService.get_daily_banned_fqdns.include? person.fqdn
        flash.now[:alert] = "Bah chef il est ban ajd lui 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        GameStatsService.add_guess(@user_id, person.fqdn)

        format.turbo_stream do
          render locals: {
            guessed_person: person,
            todays_person: todays,
            nb_tries: guesses.length + 1,
            available_people_left: Person.where.not(fqdn: (GameStatsService.todays_guesses @user_id)).order(:fqdn)
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
