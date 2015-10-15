require "date"


class StartupWorldController < ApplicationController
  def index
    response = HTTParty.get('http://localhost:3000/pitch_of_the_week').parsed_response

    p response

    @user_type = "guest"
    @pitch_of_the_week = response
  end
end
