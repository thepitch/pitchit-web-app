require 'httparty'
require 'ap'

class PitchesController < ApplicationController
  respond_to :html, :json
  before_action :set_current_user

  def index

    response = HTTParty.get('http://localhost:3000/pitches')
    @pitches = response

  end

  def show
    response = HTTParty.get('http://localhost:3000/pitches/' + params[:id])
    @pitch = response
    @pitch_comments = @pitch["comments"]

    ap @pitch_comments
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
