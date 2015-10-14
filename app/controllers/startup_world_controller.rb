require "date"
class StartupWorldController < ApplicationController
  def index
    # if current_user
    #   @user_type = current_user.user_type
    # else
    #   @user_type = "guest"
    # end
    @user_type = "guest"
    # @pitch_of_the_week = Pitch.where("created_at > :week", {week: 1.week.ago }).sort_pitches("score").first
  end
end
