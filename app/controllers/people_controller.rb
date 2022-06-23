class PeopleController < ApplicationController

  def index
    people = Person.all
    render json: people
  end

  def create
    person = Person.create(person_params)
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
    person.delete
    head :no_content
  end

  private

  def person_params
    params.permit(:name, :person_image)
  end
end
