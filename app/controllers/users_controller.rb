require 'ap'
require 'json'
require "httparty"

class UsersController < ApplicationController
  before_action :set_current_user


  def show

    id = params[:id]

    response = HTTParty.get('http://localhost:3000/users/'+id)
    @user_hash = response
  end

  def new

  end

  def create
    response = RestClient.post 'http://localhost:3000/users', :user => params, :accept => :json

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
    render json: "Success"

  end

  private
    def set_current_user
      @current_user = get_current_user
    end

    def get_current_user
      return nil unless session[:user_id]


      current_user = RestClient.get("http://localhost:3000/users/" + session[:user_id].to_s, :accept => :json)

      JSON.parse(current_user)
    end

end
