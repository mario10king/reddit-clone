class PostsController < ApplicationController
  def create
    if session[:user_id]
      body = JSON.parse(request.body.read)
      current_user.posts.create(title: body["title"], body: body["body"])
      render status: :ok
    else
      render status: 401
    end
  end

  def index 
    @posts = Post.all
    render json: @posts.to_json
  end


  def show 
    post = Post.find(params[:id])
    @post = {title: post.title, body: post.body, username: post.user.username}
    render json: @post.to_json
  end
end
