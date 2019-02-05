class PostsController < ApplicationController
  def create
    body = JSON.parse(request.body.read)
    Post.create(body: body)
    render status: :ok
  end

  def index 
    @posts = Post.all
    render json: @posts.to_json
  end
end
