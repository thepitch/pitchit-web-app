require 'ap'

class StartupWorldController < ApplicationController
  def index
    # if current_user
    #   @user_type = current_user.user_type
    # else
    #   @user_type = "guest"
    # end
    @user_type = "guest"
    @pitch_of_the_week = HTTParty.get('http://localhost:3000/pitch-of-the-week')
  end
end
