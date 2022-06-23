class Tag < ApplicationRecord
  has_many :card_tags, dependent: :destroy
  has_many :cards

  belongs_to :person
end
