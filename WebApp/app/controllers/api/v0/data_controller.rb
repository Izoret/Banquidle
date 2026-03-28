require "net/http"
require "json"
require "uri"

module Api
  module V0
    class DataController < ApplicationController
      skip_before_action :verify_authenticity_token

      def last_performance
        last_performance_data = GameStats.last_performance_dictionary
        render json: last_performance_data.to_json, status: :ok
      end
    end
  end
end
