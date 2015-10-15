require 'ap'

class StartupWorldController < ApplicationController
  def index
    @user_type = "guest"

    @pitch_of_the_week = HTTParty.get('http://localhost:3000/pitch-of-the-week')

  end
end
