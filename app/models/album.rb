class Album < ApplicationRecord
  has_many :album_cards
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
end
