class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :description
      t.string :title
      t.string :theme
      t.string :user_id

      t.timestamps
    end
  end
end
