class PeopleController < ApplicationController

  def index
    people = Person.all
    render json: people
  end

  def show
    person = Person.find_by(id: params[:id])
    render json: person
  end

  def create
    person = Person.create(person_params)
    cards = Card.where("description LIKE ?", "%#{params[:name]}%")
    tags = Tag.where(name: params[:name])
    if cards.length > 0 && tags.length == 0
      tag = Tag.create(name: params[:name], person_id: person.id)
      cards.each do |card|
        card_tag = CardTag.create(tag_id: tag.id, card_id: card.id)
      end
    end
    render json: person, status: :created
  end

  def update
    person = Person.find(params[:id])
    person.update(person_image: params[:person_image])
    person.update(image_url: rails_blob_path(person.person_image))
    render json: person, status: :ok
  end

  def destroy
    person = Person.find_by(id: params[:id])
    
    person.destroy
    
    head :no_content
  end

  def tag_connect
    
  end
  
  private
  
  
  def person_params
    params.permit(:name, :person_image)
  end
end
