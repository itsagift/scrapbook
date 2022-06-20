class AlbumsController < ApplicationController

  def index
    albums = Album.all
    render json: albums
  end

  def show 
    album = Album.find_by(id: params[:id])
    render json: album, serializer: AlbumWithCardsSerializer
  end

  def create
    album = Album.create!(description: params[:description], title: params[:title], user_id: session[:user_id])
    render json: album, status: :created
  end

  def update
    album = Album.update(description: params[:description], title: params[:title])
    render json: album, status: :ok
  end

  def destroy
    album = Album.find_by(id: params[:id])
    album.delete
    head :no_content
  end

  private

  def album_params
    params.permit(:description, :title, :user_id)
  end
end
