Rails.application.routes.draw do
  resources :posts, only: [:create, :index, :show, :destroy]
  resources :users, only: [:create, :show], param: :username 
  post '/sign_in' => "users#sign_in"
  post '/sign_out' => "users#sign_out"
end
