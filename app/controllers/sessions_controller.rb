class SessionsController < ApplicationController
  include UsersHelper

  def new
  end

  def create

    response = RestClient.post 'http://pitchitbackend.herokuapp.com/users/login', :user => params, :accept => :json


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


      current_user = RestClient.get("http://pitchitbackend.herokuapp.com/users/" + session[:user_id].to_s, :accept => :json)
      JSON.parse(current_user)
    end
end
