require 'ap'
require 'json'
require "httparty"

class UsersController < ApplicationController

  def show

    id = params[:id]

    response = HTTParty.get('http://localhost:3000/users/'+id)
    @user_hash = response
  end

  def new

  end

  def create

    p "*" * 80
    p "Creating a new user!"
    p params
    p "*" * 80

    response = RestClient.post 'http://localhost:3000/users', :user => params, :accept => :json

    p "*" * 80
    p "POST response"
    p "*" * 80

    session[:user_id] = JSON.parse(response)["id"]

    # ap @result
    redirect_to user_path(session[:user_id])
  end

  def edit

  end

  def update
    HTTParty.post('http://localhost:3000/users/' + params[:id],
      params[:user]
    )
  end

  def set_session
    session[:user_id] = params[:id]

    p "*" * 80
    p session[:user_id]
    p "*" * 80

    render json: "Success"

  end
end
