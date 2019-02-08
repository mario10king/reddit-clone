Rails.application.routes.draw do
  resources :posts, only: [:create, :index, :show, :update, :destroy] do
    resources :comments, only: [:create]
  end

  resources :comments, only: [] do
    resources :comments, only: [:create]
  end
  resources :users, only: [:create, :show], param: :username 
  post '/sign_in' => "users#sign_in"
  post '/sign_out' => "users#sign_out"
end
