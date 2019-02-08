class CommentsController < ApplicationController

  def create
    commentable = route(params)
    body = get_body(request) 
    comment = commentable.comments.new(text: body["text"])
    comment.user = current_user

    if comment.save
      render status: :created
    else
      render status: 400
    end
  end
  
  private

  def route(params) 
    post_id = params[:post_id]
    comment_id = params[:comment_id]
    if post_id 
      find_post(post_id)
    elsif comment_id 
      find_comment(comment_id)
    end
  end

  def find_post(id)
    Post.find(id)
  end

  def find_comment(id)
    Comment.find(id)
  end
end
