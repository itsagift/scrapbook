class AlbumCardsController < ApplicationController
  def create 
    album_data = params[:data]
    album_data.each do |card|
      AlbumCard.create(album_id: params[:album_id], card_id: card)
    end
    albumcards = AlbumCard.where(album_id: params[:album_id])
    render json: albumcards, status: :created
  end
  
  def create_card
    album_data = params[:data]
    albumcards = AlbumCard.where(album_id: params[:album_id])
    albumcardids = albumcards.map { |f| f.card_id }
    album_data.each do |card|
      if (albumcardids.exclude?(card))
        AlbumCard.create(album_id: params[:album_id], card_id: card)
      end
    end
    album = Album.find_by(id: params[:album_id])
    render json: album, serializer: AlbumWithCardsSerializer, status: :created
  end

  private

  def album_card_params
    params.permit(:album_id, :card_id)
  end
end
