class PostsController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy]

  def create
    post = current_user.posts.new(get_post_params)

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
    post = Post.find(get_post_id)

    if post
      feed = Feed.new
      render json: feed.format_post(post).to_json
    else 
      render status: 400
    end
  end

  def update
    post = Post.find(get_post_id)

    if post.user == current_user
      updated = post.update(get_post_params)
    end

    if updated 
      render status: :ok
    else
      render status: 400
    end
  end

  def destroy 
    post = Post.find(get_post_id)
    if post.user == current_user
      post.destroy
      render status: 200
    else
      render status: 401
    end
  end

  private

  def get_post_params
    params.permit(:title, :text, :category)
  end

  def get_post_id
    params.require(:id)
  end
end
