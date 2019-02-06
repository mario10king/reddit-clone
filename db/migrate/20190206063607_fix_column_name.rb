class FixColumnName < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :posts, :body, :text
  end

  def self.down
    rename_column :posts, :text, :body
  end
end
