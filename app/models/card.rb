class Card < ApplicationRecord
  has_many :card_tags
  has_many :tags
  has_many :album_cards

  has_one_attached :card_image

  # def card_image_url
  #   Rails.application.routes.url_helpers.rails_representation_url(
  #     card_image.variant(resize_to_limit: [200, 200]).processed, only_path: true
  #   )
  # end
end
