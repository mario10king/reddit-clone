class Feed
  def format_posts(posts)
    posts.map do |post|
      format_post(post)
    end
  end

  def format_post(post)
    post.as_json(include: {user: {only: :username}}, only: [:id, :title, :text, :category])
  end
end
