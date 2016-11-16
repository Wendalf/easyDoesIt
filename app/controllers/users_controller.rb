class UsersController < ApplicationController
skip_before_filter :verify_authenticity_token, :only => :create



  def show
    @user = User.find_by(id: params[:id])
    # @patients = @user.patients
  end


end
