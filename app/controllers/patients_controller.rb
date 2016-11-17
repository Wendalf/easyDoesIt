class PatientsController < ApplicationController

  require 'csv'

  def new
    @user = User.find_by(id: params[:user_id])
    @patient = Patient.new
    render "new"
  end


  def create
    if params[:leads]
      CSV.foreach(params[:leads].path, headers: true) do |lead|
        @patient = current_user.patients.create(name: lead[0] + " " + lead[1], dob: lead[2], height: lead[3], weight: lead[4], health_history: lead[5], medical_history: lead[6], sex: lead[7], age: lead[8], email: lead[9], phone_number: lead[10], address: lead[11])
      end
    else
      @patient = current_user.patients.create(patient_params)
      @patient.user = current_user
    end
  redirect_to user_patients_path(current_user)
end


  def show
    @patient = Patient.find_by(id: params[:id])
  end


  def index
    if params[:criteria]
      @user = current_user
      criteria = params[:criteria]
      input = params[:input]
      @patients = current_user.patients.where("#{criteria}" => ["#{input}"])
      respond_to do |f|
        f.json{render :json => @patients.to_json}
      end
    else
    @user = current_user
  end
end



  def edit
    binding.pry
    @patient = Patient.find_by(id: params[:id])
    @user = User.find_by(id: params[:user_id])
  end

  def update
    @patient = Patient.find_by(id: params[:id])
    @patient.update(patient_params)
    redirect_to user_patient_path(@patient.user, @patient)
  end





  private

  def patient_params
    params.require(:patient).permit(:name, :height, :weight, :sex, :phone_number, :address, :email, :health_history, :medical_history, :note, :dob)

  end





end
