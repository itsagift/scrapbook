class Tag < ApplicationRecord
  has_many :card_tags
  has_many :cards

  belongs_to :person
end
