class PostsController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy]

  def create
    body = get_body(request) 
    post = current_user.posts.new(title: body["title"], text: body["text"], category: body["category"])

    if post.save
      render status: :created
    else
      render status: 400
    end
  end

  def index 
    posts = Post.all

    render json: formatted_posts(posts).to_json
  end

  def show 
    post = Post.find(params[:id])

    if post
      render json: format_post(post).to_json
    else 
      render status: 400
    end
  end

  def destroy 
    post = Post.find(params[:id])
    if post.user == current_user
      post.destroy
      render status: 200
    else
      render status: 401
    end
  end
end
