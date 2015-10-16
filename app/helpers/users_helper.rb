module UsersHelper

  def get_current_user
    return nil unless session[:user_id]

    current_user = RestClient.get("http://localhost:3000/users/" + session[:user_id].to_s, :accept => :json)


    JSON.parse(current_user)
  end

  def user_has_voted?(votable_id, votable_type)
    voted = false

    if get_current_user
      user_votes = get_current_user["votes"]

      user_votes.each do |vote|
        if vote["votable_type"] == votable_type && vote["votable_id"] == votable_id.to_i
          voted = true
        end
      end
    end

    voted

  end
end
