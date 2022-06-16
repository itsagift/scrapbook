class UsersController < ApplicationController
  before_action :authorize, only: [:show]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    users = User.all
    render json: users
  end
  
  def show
    render json: @current_user
  end

  def create
    user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    end
  end
  private

  def user_params
    params.permit(:username, :email, :password)
  end

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end
end