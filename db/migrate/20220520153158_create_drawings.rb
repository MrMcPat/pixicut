class CreateDrawings < ActiveRecord::Migration[6.1]
  def change
    create_table :drawings do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.string :name
      t.integer :frame_count
      t.boolean :is_ready
      t.integer :like_count
      t.integer :user_liked, array: true, default: []

      t.timestamps
    end
  end
end
