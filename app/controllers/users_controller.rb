class UsersController < ApplicationController
  def create
    user = User.new(get_params)

    if user.save
      session[:user_id] = user.id
      render json: user.as_json({only: :username}), status: :created
    else
      render status: 400
    end
  end

  def sign_in
    user = User.find_by(get_params_username).try(:authenticate, get_params_password[:password])

   if user
      session[:user_id] = user.id
      render json: user.as_json({only: :username}), status: :ok
   else
      render status: 400
   end
  end

  def sign_out
    session[:user_id] = nil
    render status: :ok
  end

  def show
    user = User.find_by(get_params_username)
    if user
      posts = user.posts
      feed = Feed.new
      render json: feed.format_posts(posts).to_json, status: :ok
    else
      render status: 400
    end
  end

  private

  def get_params
    get_params_username.merge(get_params_password)
  end

  def get_params_password
    params.permit(:password)
  end

  def get_params_username
    params.permit(:username)
  end
end
