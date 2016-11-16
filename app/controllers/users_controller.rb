class UsersController < ApplicationController




  def show
    @user = User.find_by(id: params[:id])
    # @patients = @user.patients
  end
end
