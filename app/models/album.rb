class Album < ApplicationRecord
  has_many :album_cards
  belongs_to :user
end
