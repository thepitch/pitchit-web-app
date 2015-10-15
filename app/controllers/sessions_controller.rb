class SessionsController < ApplicationController
  def new
  end

  def create
    response = HTTParty.post('http://localhost:3000/resource/signout', {
        session[:params]
      })


    response = HTTParty.post('http://localhost:3000/users',
                              :body => params.to_json,
                              :headers => { 'Content-Type' => 'application/json' }
                              )

    if response
      @current_user = response
      redirect_to(@current_user)
    end
  end

  def destroy
    HTTParty.post('http://localhost:3000/resource/signout')
    @current_user = false
  end
end
