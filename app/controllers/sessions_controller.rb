class SessionsController < ApplicationController
  def create # for signing up + logging in
    user = User.find_by(username: params[:username])
    if user
        session[:user_id] = user.id 
        render json: user, status: :created
    else
        render json: { error: "Invalid gOOse or password" }, status: :unauthorized
    end
  end

def destroy # for logging out
  session.delete :user_id
  head :no_content
end

end
