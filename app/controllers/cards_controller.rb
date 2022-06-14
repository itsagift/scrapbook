class CardsController < ApplicationController
  def index 
    cards = Card.all 
    render json: cards
  end

  def create
    card = Card.create(card_params)
  end

  private

  def card_params
    params.permit(:description, :year, :card_image)
end
