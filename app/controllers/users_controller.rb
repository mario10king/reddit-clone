class UsersController < ApplicationController
  def create
    body = get_body(request)
    user = User.new(username: body["username"], password: body["password"])

    if user.save
      session[:user_id] = user.id
      render json: {username: user.username}.to_json, status: :created
    else
      render status: 400
    end
  end

  def sign_in
    body = get_body(request) 
    user = User.find_by(username: body["username"]).try(:authenticate, body["password"])

   if user
      session[:user_id] = user.id
      render json: {username: user.username}.to_json, status: :ok
   else
      render status: 400
   end
  end

  def sign_out
    session[:user_id] = nil
    render status: :ok
  end

  def show
    user = User.find_by(username: params[:username])
    if user
      posts = user.posts
      feed = Feed.new
      render json: feed.format_posts(posts).to_json, status: :ok
    else
      render status: 400
    end
  end
end
