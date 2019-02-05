Rails.application.routes.draw do
  resources :posts, only: [:create, :index]
  resources :users, only: [:create] 
  resources :sessions, only: [:create, :destroy]
  post '/sign_in' => "users#sign_in"
  post '/sign_out' => "users#sign_out"
end
