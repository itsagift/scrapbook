class Card < ApplicationRecord
  has_many :card_tags
  has_many :tags
  has_many :album_cards

  has_one_attached :card_image
end
