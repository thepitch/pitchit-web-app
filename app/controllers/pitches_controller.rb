require 'httparty'
require 'ap'

class PitchesController < ApplicationController
  respond_to :html, :json
  before_action :set_current_user

  def index 
    sort_type = params[:sort_type] || "hot"

    response = HTTParty.get('http://localhost:3000/pitches?sort_type=' + sort_type)
    ap response.parsed_response
    p "%%%%%%%%%%%%^^^^^^^^^^^^^%%%%%%%%%%%%%%"
    @pitches = response.parsed_response
  end

  def show
    response = HTTParty.get('http://localhost:3000/pitches/' + params[:id])
    p "%"*70
    ap response
    p "%"*70
    @pitch = response
    @pitch_comments = @pitch["comments"]
    if request.xhr?
      render text: @pitch["video"].to_json
    end

  end

  def new
    # @pitch = Pitch.new
  end

  def edit
    # @pitch = Pitch.find(params[:id])
  end

  def create
    # @pitch = current_user.pitches.new(pitch_params)
    # if @pitch.save
    #   redirect_to @pitch
    # else
    #   render 'new'
    # end
  end

  def update
    # @pitch = Pitch.find(params[:id])

    # if @pitch.update(pitch_params)
    #   redirect_to @pitch
    # else
    #   render 'edit'
    # end
  end

  def destroy
    # @pitch = Pitch.find(params[:id])
    # @pitch.destroy

    # redirect_to pitches_path
  end

  def sort
    sort_type = params[:sort_type] || "hot"

    response = HTTParty.get('http://localhost:3000/pitches?sort_type=' + sort_type)

    @pitches = response.parsed_response
    render partial: 'pitches/pitch_list'
  end

  private
    def set_current_user
      @current_user = false
    end

    def pitch_params
      # params.require(:pitch).permit(:title,
      #   :tagline,
      #   :description,
      #   :media)
    end
    # def sort_type
    #   params.require(:sort_type)
    # end

    def set_pitch
      # @pitch = Pitch.find(params[:id])
    end
end
