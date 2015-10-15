require 'ap'
require 'json'
require "httparty"

class UsersController < ApplicationController

  def show
    id = params[:id]

    response = HTTParty.get('http://localhost:3000/users/'+id)
    @user = response
  end

  def new

  end

  def create
    ap params
    @result = HTTParty.post('http://localhost:3000/users'.to_s,
      {user: params.to_json}
    )
    # ap @result
    redirect_to '/pitches'
  end

  def edit

  end

  def update
    HTTParty.post('http://localhost:3000/users/' + params[:id],
      params[:user]
    )
  end
end
