class AlbumCardsController < ApplicationController
  def index_by_album
    album = Album.find_by(id: params[:id], user_id: session[:user_id])
    album_cards = AlbumCard.where(album_id: album.id)
    render json: album_cards
  end
end
