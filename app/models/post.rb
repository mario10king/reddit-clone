class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, as: :commentable

  validates :title, presence: true
  validates :category, presence: true
  validates :text, presence: true
end
