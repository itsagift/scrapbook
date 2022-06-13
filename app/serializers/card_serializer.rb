class CardSerializer < ActiveModel::Serializer
  attributes :id, :tags, :albums, :description, :year

  def tags 
    self.object.card_tags.map do |tag|
      tag.tag
    end 
  end 

  def albums
    self.object.album_cards.map do |album|
      album.album
   end
  end
end
