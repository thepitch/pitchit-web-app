require 'ap'

class UsersController < ApplicationController

  def show

  end

  def new
    p "HIT"
  end

  def create
    ap params[:user]
    HTTParty.post('http://localhost:3000/resource',
      params[:user]
    )
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
