class UsersController < ApplicationController
  def create
    body = JSON.parse(request.body.read)
    user = User.new(username: body["username"], password: body["password"])

    if user.save
      session[:user_id] = user.id
      render status: :ok
    else
      render status: 401
    end
  end

  def sign_in
    body = JSON.parse(request.body.read)
    user =  User.find_by(username: body["username"]).try(:authenticate, body["password"])
   if user
      session[:user_id] = user.id
      render status: :ok
   else
      render status: 401
   end
  end

  def sign_out
    session[:user_id] = nil
    render status: :ok
  end
end

