class AlbumCardSerializer < ActiveModel::Serializer
  attributes :card
  belongs_to :card
end
