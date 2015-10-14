class VotesController < ApplicationController
  respond_to :json

  include VotesHelper
  def create
    p "*" * 80
    p params
    p "*" * 80

    if params[:bookmarked] == "true"
      vote_created = self.bookmark
    else
      current_user.votes.create!(votable_id: params[:votable_id], votable_type: params[:votable_type])
    end

    if request.xhr?
      if params[:votable_type] == "Pitch"
        render json: {
            newVoteNum: Pitch.find(params[:votable_id]).votes.count,
            pitchId: params[:votable_id],
            voteCreated: vote_created
          }
      else
        render json: Comment.find(params[:votable_id]).votes.count
      end
    else
      redirect_to :back
    end
  end

  protected

end
