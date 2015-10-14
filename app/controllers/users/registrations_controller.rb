class Users::RegistrationsController < Devise::RegistrationsController
# before_filter :configure_sign_up_params, only: [:create]
# before_filter :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  def new
    HTTParty.get('http://localhost:3000/users/sign_up')
  end

  # POST /resource
  def create
    HTTParty.post('http://localhost:3000/users',
        params[:user]
      )
    super
  end

  # PUT /resource
  def update
    HTTParty.post('http://localhost:3000/users/' + params[:id],
      params[:user]
    )
    super
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

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

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
