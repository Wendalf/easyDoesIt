class PrescriptionsController < ApplicationController

  def new
    @patient = Patient.find_by(id: params[:patient_id])
    @prescription = Prescription.new
    @drugs = @prescription.drugs.build

  end



  def create
    @prescription = Prescription.create(experition_date: params["bday"])
      drugs = params["prescription"]["drugs"]["name"]
      drugs.each do |drug|
      @prescription.drugs.find_or_create_by(name: drug)
    end
    redirect_to prescription_path(@prescription)
  end


  def show
    @prescription = Prescription.find_by(id: params[:id])
  end




  private

  def prescription_params
    params.require(:prescription).permit(:bday)
  end

  def drug_params
    params.require(:prescription).permit(:drugs)
  end








end
