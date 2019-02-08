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
    feed = Feed.new

    render json: feed.format_posts(posts).to_json
  end

  def show 
    post = Post.find(params[:id])

    if post
      feed = Feed.new
      render json: feed.format_post(post).to_json
    else 
      render status: 400
    end
  end

  def update
    post = Post.find(params[:id])
    body = get_body(request) 

    if post.user == current_user
      updated = post.update(title: body["title"], text: body["text"], category: body["category"])
    end

    if updated 
      render status: :ok
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
