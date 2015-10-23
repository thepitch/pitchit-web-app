class SubcommentsController < ApplicationController

  def new
    @subcomment = Subcomment.new
  end

  def create
    response = RestClient.post 'http://pitchitbackend.herokuapp.com/subcomments', :subcomment => params,  :accept => :json
    # if current_user
    #   @subcomment = current_user.subcomments.build(subcomment_params)
    #   if @subcomment.save
    #     render json: @subcomment
    #     # Comment.find(subcomment_params[:comment_id]).subcomments << @subcomment
    #     # redirect_to :back
    #   end
    # else
    #   redirect_to user_session_path, notice: "Please log in to add a comment!"
    #   # render 'new'
    # end
  end

  def destroy
    @subcomment = Subcomment.find(params[:id])
    render json: @subcomment
    @subcomment.destroy

    # redirect_to subcomments_path
  end

  private

  def subcomment_params
    params.require(:subcomment).permit(:content, :comment_id)
  end

end
