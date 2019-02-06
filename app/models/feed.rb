class Feed
  def format_posts(posts)
    posts.map do |post|
      format_post(post)
    end
  end

  def format_post(post)
      {id: post.id, title: post.title, text: post.text, username: post.user.username}
  end
end
