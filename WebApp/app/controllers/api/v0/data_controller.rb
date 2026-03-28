require "net/http"
require "json"
require "uri"

module Api
  module V0
    class DataController < ApplicationController
      skip_before_action :verify_authenticity_token

      def nb_tries_yesterday
        yesterdays_data = DailyGameStats.nb_tries_for_yesterday
        render json: yesterdays_data, status: :ok
      end
    end
  end
end
