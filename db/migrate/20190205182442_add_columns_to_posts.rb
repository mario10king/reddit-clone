class AddColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :title, :string
    add_reference :posts, :user, foreign_key: true 
  end
end
