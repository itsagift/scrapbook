class AlbumWithCardsSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :album_cards

  def album_cards
    object.album_cards.map do |album_card|
      AlbumCardSerializer.new(album_card, scope: scope, root: false, event: object)
    end
  end


end
