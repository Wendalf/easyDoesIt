class UsersController < ApplicationController
<<<<<<< HEAD




  def show
    @user = User.find_by(id: params[:id])
    # @patients = @user.patients
  end
=======
skip_before_filter :verify_authenticity_token, :only => :create
>>>>>>> bedfc26e34b7e75eb74ad1fdcecfa2d471f6987b
end
