class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end


  def create
    response = RestClient.post 'http://pitchitbackend.herokuapp.com/comments', :comment => params,  :accept => :json

  end

  def destroy
    @comment = Comment.find(params[:id])
    render json: @comment
    @comment.destroy

    # redirect_to comments_path
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :pitch_id)
    end

end
