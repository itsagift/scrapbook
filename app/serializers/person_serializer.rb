class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :card_tags, :cards, :image_url

  def cards
    object.card_tags.map do |card_tag|
      Card.find_by(id: card_tag.card_id)
    end
  end
end
