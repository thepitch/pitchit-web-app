
require 'ap'

class StartupWorldController < ApplicationController
  def index
    @user_type = "guest"

    @pitch_of_the_week = HTTParty.get('http://pitchitbackend.herokuapp.com/pitch-of-the-week')
  end
end
