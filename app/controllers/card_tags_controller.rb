class CardTagsController < ApplicationController
  def index
    card_tags = CardTag.all
    render json: card_tags
  end

  def create
    card_tag = CardTag.create(name: params[:name], tag_id: params[:tag_id], card_id: params[:card_id])
    render json: card_tag
  end
end
