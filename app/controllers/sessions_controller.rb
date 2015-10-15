class SessionsController < ApplicationController
  include UsersHelper

  def new
  end

  def create
    p "LOGIN PARAMS"
    p "*" * 80
    p params
    p "*" * 80


    response = RestClient.post 'http://localhost:3000/users/login', :user => params, :accept => :json


    unless response == "Invalid Login"
      response = JSON.parse(response)
    end


    if response != "Invalid Login"
      session[:user_id] = response["id"]
      @current_user = get_current_user
      redirect_to user_path(@current_user["id"])
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private
    def set_current_user
      @current_user = get_current_user
    end

    def get_current_user
      return nil unless session[:user_id]


      current_user = RestClient.get("http://localhost:3000/users/" + session[:user_id].to_s, :accept => :json)

      p "Current User*" * 20
      p JSON.parse(current_user)
      p "Current User*" * 20

      JSON.parse(current_user)
    end
end
  