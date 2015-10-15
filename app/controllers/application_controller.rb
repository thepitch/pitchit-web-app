class ApplicationController < ActionController::Base

  include ContentHelper
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  # before_action :authenticate_user!



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
end
