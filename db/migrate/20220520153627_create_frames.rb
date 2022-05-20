class CreateFrames < ActiveRecord::Migration[6.1]
  def change
    create_table :frames do |t|
      t.integer :drawing_id
      t.text :image_url

      t.timestamps
    end
  end
end
