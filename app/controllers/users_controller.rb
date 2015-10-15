require 'ap'

class UsersController < ApplicationController

  def show
    id = params[:id]

    response = HTTParty.get('http://localhost:3000/users/'+id)
    ap response

    
    @user = response
  end

  def new

  end

  def create
    ap params
    ap params[:user]
    HTTParty.post('http://localhost:3000/users',
      {user: params}
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
