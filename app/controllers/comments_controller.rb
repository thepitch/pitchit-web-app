class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end


  def create
    response = RestClient.post 'http://localhost:3000/comments', :comment => params,  :accept => :json

    #   if @comment.save
    #     render json: @comment
    #   end
    # else
    #   # redirect_to user_session_path, notice: "Please log in to add a comment!"
    #   # render 'new'
    # end
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
