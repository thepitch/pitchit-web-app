class ApplicationController < ActionController::Base

  include ContentHelper
  include UsersHelper
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  # before_action :get_current_user

  before_action :set_gon_session

  def set_gon_session
    gon.session = session
  end


  # protected

  # # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.for(:sign_up) << :first_name
  #   devise_parameter_sanitizer.for(:sign_up) << :last_name
  # end

  # # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.for(:account_update) << :first_name
  #   devise_parameter_sanitizer.for(:account_update) << :last_name
  #   devise_parameter_sanitizer.for(:account_update) << :phone
  #   devise_parameter_sanitizer.for(:account_update) << :blurb
  #   devise_parameter_sanitizer.for(:account_update) << :user_type
  #   devise_parameter_sanitizer.for(:account_update) << :company
  #   devise_parameter_sanitizer.for(:account_update) << :picture_url
  # end
  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    headers['Access-Control-Max-Age'] = '1728000'
    # if /\Ahttps?:\/\/pitchitbackend.herokuapp.com\z/ =~ request.headers['HTTP_ORIGIN']
    #   p "************************"
    #   p headers['Access-Control-Allow-Origin']
    #   p "I'M HIT!"
    #   headers['Access-Control-Allow-Origin'] = request.headers['HTTP_ORIGIN']
    #   p headers['Access-Control-Allow-Origin']
    # end
  end

  def get_current_user
    HTTParty.get('http://pitchitbackend.herokuapp.com/current-user')
  end

end
