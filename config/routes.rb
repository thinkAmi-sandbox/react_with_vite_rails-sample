Rails.application.routes.draw do
  root 'hello#index'
  get 'api/now'

  namespace :after_redirect do
    namespace :erb do
      resources :fruits, only: [:index, :show]
    end
  end

  namespace :api do
    namespace :try_redirect do
      resources :fruits, only: [:show]
    end
  end

  # マッチしないルートはフロントに流す
  get '*all', to: 'hello#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
