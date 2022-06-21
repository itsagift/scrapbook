class Card < ApplicationRecord
  has_many :card_tags
  has_many :tags
  has_many :album_cards

  has_one_attached :card_image

  def test_url
    Rails.application.routes.url_helpers.rails_blob_path(self.card_image, only_path: true)
  end
end
