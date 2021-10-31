Rails.application.routes.draw do
  root 'hello#index'
  get 'api/now'

  # マッチしないルートはフロントに流す
  get '*all', to: 'hello#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
