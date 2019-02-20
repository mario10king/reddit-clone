class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    User.find(session[:user_id])
  end

  def authenticate_user
    if !session[:user_id]
      render status: 401
    end
  end
end
