class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end


  def create
    if current_user
      @comment = current_user.comments.build(comment_params)
      if @comment.save
        render json: @comment

        # Pitch.find(comment_params[:pitch_id]).comments << @comment
        # redirect_to :back
      end
    else
      # redirect_to user_session_path, notice: "Please log in to add a comment!"
      # render 'new'
    end
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
