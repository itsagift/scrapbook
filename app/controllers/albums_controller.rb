class AlbumsController < ApplicationController

  def index
    albums = Album.all
    render json: albums
  end

  def create
    album = Album.create!(description: params[:description], title: params[:title], user_id: session[:user_id])
    render json: album, status: :created
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
