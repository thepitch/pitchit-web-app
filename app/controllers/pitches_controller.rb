require 'httparty'
require 'ap'

class PitchesController < ApplicationController
  respond_to :html, :json
  before_action :set_current_user

  def index
    sort_type = params[:sort_type] || "hot"

    response = HTTParty.get('http://pitchitbackend.herokuapp.com/pitches?sort_type=' + sort_type)

    @pitches = response.parsed_response

  end

  def show
    response = HTTParty.get('http://pitchitbackend.herokuapp.com/pitches/' + params[:id])
    @pitch = response
    @pitch_comments = @pitch["comments"]

    if request.xhr?
      render text: @pitch["video"].to_json
    end


  end

  def new
    @pitch = {}
  end

  def edit
    # @pitch = Pitch.find(params[:id])
  end

  def create

    response = RestClient.post 'http://pitchitbackend.herokuapp.com/pitches', :pitch => params, :accept => :json

    response = JSON.parse(response)

    p response

    redirect_to pitch_path(response["id"])
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

    response = HTTParty.get('http://pitchitbackend.herokuapp.com/pitches?sort_type=' + sort_type)

    @pitches = response.parsed_response
    render partial: 'pitches/pitch_list'
  end

  private
    def set_current_user
      @current_user = get_current_user
    end

    def get_current_user
      return nil unless session[:user_id]


      current_user = RestClient.get("http://pitchitbackend.herokuapp.com/users/" + session[:user_id].to_s, :accept => :json)

      JSON.parse(current_user)
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
