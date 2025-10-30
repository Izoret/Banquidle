class MainController < ApplicationController
  def clear_session_and_reload
    reset_session
    redirect_to root_path
  end
end
