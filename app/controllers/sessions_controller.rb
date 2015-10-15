class SessionsController < ApplicationController
  def new
  end

  def create
    response = RestClient.post 'http://localhost:3000/users', :user => params, :accept => :json

    if response
      @current_user = get_current_user
      redirect_to user_path(@current_user)
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
