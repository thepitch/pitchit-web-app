module UsersHelper

  def get_current_user
    return nil unless session[:user_id]

    current_user = RestClient.get("http://localhost:3000/users" + session[:user_id], :accept => :json)

    p "Current User*" * 20
    p current_user
    p "Current User*" * 20

    current_user
  end
end
