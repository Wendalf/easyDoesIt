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
      @patient = current_user.patients.find_or_create_by(patient_params)
      @patient.user = current_user
      @patient.save
    end
  redirect_to user_patients_path(current_user)
end


  def show
    @patient = Patient.find_by(id: params[:id])
  end


  def index

    if current_user
    criteria = params[:criteria]
    input = params[:input]

      if criteria
        if criteria == "all"
          @patients = current_user.patients.all
        else
          # @user = current_user
          # @patients = current_user.patients.where("#{criteria}" => ["#{input}"])
          @patients = current_user.patients.where("#{criteria} LIKE ?","%#{input}%").all
        end
        respond_to do |f|
          f.json{render :json => @patients.to_json}
        end
      else
      @user = current_user
    end
  else
    redirect_to welcome_path
  end

end



  def edit
    @patient = Patient.find_by(id: params[:id])
  end

  def destroy
    @patient = current_user.patients.find_by_id(params[:id])
    @patient.destroy
    redirect_to root_path
  end


  def update
    @patient = Patient.find_by(id: params[:id])
    @patient.update(patient_params)
    redirect_to user_patient_path(@patient)
  end

def download_csv
  binding.pry
  patients = params[:patients].split(',')
  @patients = current_user.patients.where(:name => patients)
  CSV.open("/Users/isuru/desktop/patients.csv", 'w') do |csv|
    csv << Patient.column_names
    @patients.each do |m|
      csv << m.attributes.values
    end
  end
  respond_to do |f|
    f.json{render :json => @patients.to_json}
  end
end

  private

  def patient_params
    params.require(:patient).permit(:name, :height, :weight, :sex, :phone_number, :address, :email, :health_history, :medical_history, :note, :dob)

  end
end
