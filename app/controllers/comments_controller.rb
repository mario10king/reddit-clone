class CommentsController < ApplicationController
  before_action :route, only: [:create]

  def create
    comment = @commentable.comments.new(get_comment_params)
    comment.user = current_user

    if comment.save
      render status: :created
    else
      render status: 400
    end
  end
  
  private

  def route 
    post_id = get_post_id 
    comment_id = get_comment_id 
    if post_id 
      @commentable = find_post(post_id)
    elsif comment_id 
      @commentable = find_comment(comment_id)
    end
  end

  def find_post(id)
    Post.find(id)
  end

  def find_comment(id)
    Comment.find(id)
  end

  private

  def get_comment_params
    params.permit(:text)
  end

  def get_post_id
    params.require(:post_id)
  end

  def get_comment_id
    params.require(:comment_id)
  end
end
