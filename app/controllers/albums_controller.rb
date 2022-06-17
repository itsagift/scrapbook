class AlbumsController < ApplicationController
  def index
    albums = Album.all
    render json: albums
  end

  def destroy
    album = Album.find_by(id: params[:id])
    album.delete
    head :no_content
  end
end
