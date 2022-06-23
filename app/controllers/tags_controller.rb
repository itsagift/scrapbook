class TagsController < ApplicationController
 
  def index
    tags = Tag.all
    render json: tags
  end

  def create
    tag = Tag.create(name: params[:name], person_id: params[:person_id])
    render json: tag
  end

  def destroy 
    tag = Tag.find_by(id: params[:id])
    tag.destroy
  end

end
