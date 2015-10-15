module ApplicationHelper
  # def current_user
  #   # response = HTTParty.get('http://localhost:3000/current-user').parsed_response
  #   # !!response
  # end


  def user_has_voted?(votable_id, votable_type)
    # return false unless current_user

    # if votable_type == "Pitch"
    #   votable = Pitch.find(votable_id)
    # else
    #   votable = Comment.find(votable_id)
    # end

    # votables = current_user.votes.map(&:votable)
    # votables.include?(votable)

    [true, false].sample
  end

  def user_has_bookmarked?(votable_id, votable_type)
    # return false unless current_user

    # if votable_type == "Pitch"
    #   votable = Pitch.find(votable_id)
    # else
    #   votable = Comment.find(votable_id)
    # end

    # votables = current_user.votes.where(bookmarked: true).map(&:votable)
    # votables.include?(votable)
    [true, false].sample
  end

  def upvote_button
    raw("<i class='fa fa-chevron-up fa-2x vote-up'></i>")
  end

  def bookmark_button
    raw("<i class='fa fa-bookmark fa-2x bookmark'></i>")
  end

end
