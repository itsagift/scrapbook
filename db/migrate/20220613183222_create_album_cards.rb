class CreateAlbumCards < ActiveRecord::Migration[6.1]
  def change
    create_table :album_cards do |t|
      t.integer :album_id
      t.integer :card_id

      t.timestamps
    end
  end
end
