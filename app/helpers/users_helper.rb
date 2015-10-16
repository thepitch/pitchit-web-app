module UsersHelper

  def get_current_user
    return nil unless session[:user_id]
    p "$$$$$$$$$$$$$$$$$"
    p session[:user_id]
    p "$$$$$$$$$$$$$$$$$"
    current_user = RestClient.get("http://localhost:3000/users/" + session[:user_id].to_s, :accept => :json)

    p "Current User*" * 20
    p JSON.parse(current_user)
    p "Current User*" * 20

    JSON.parse(current_user)
  end

  def user_has_voted?(votable_id, votable_type)
    if get_current_user
      false
      user_votes = get_current_user["votes"]
      p user_votes
      # user_votes.each do |vote|
      #   if vote["votable_type"] == votable_type && vote["votable_id"] == votable_id
      #     return true
      #   end
      # end
    end

  end
end
