class SessionsController < ApplicationController
  def new
  end

  def create
    HTTParty.post('http://localhost:3000/resource/signout', {
        session[:params]
      })
  end

  def destroy
    HTTParty.post('http://localhost:3000/resource/signout')
    @current_user = false
  end
end
