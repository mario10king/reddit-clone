class PostsController < ApplicationController
  def create
    if session[:user_id]
      body = JSON.parse(request.body.read)
      Post.create(body: body)
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
    @post = Post.find(params[:id])
    render json: @post.to_json
  end
end
