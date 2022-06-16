class CardsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def index 
    cards = Card.all.includes(card_image_attachment: :blob)
    render json: cards
  end

  def show
    card = Card.find_by(id: params[:id])
    render json: card
  end

  def create
    card = Card.create(card_params)
    render json: card, status: :created
  end

  def update
    card = Card.find(params[:id])
    card.update(card_image: params[:card_image])
    card_image_url = rails_blob_path(card.card_image)
    render json: {card: card, card_image_url: card_image_url}
  end

  def destroy
    card = Card.find_by(id: params[:id])
    card.delete
    head :no_content
  end

  private

  def card_params
    params.permit(:description, :year, :card_image)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end
