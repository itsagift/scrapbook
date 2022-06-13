class AlbumCard < ApplicationRecord
  belongs_to :card
  belongs_to :album
end
