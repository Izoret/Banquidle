Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "loading#index"

  namespace :api do
    namespace :v0 do
      post "token", to: "discord_token#create"
      get "last_performance", to: "data#last_performance"
    end
  end

  resources :game, only: [] do
    collection do
      get :load_content
      post :submit_guess
    end
  end
end
