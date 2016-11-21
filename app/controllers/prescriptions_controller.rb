require "pdfkit"
class PrescriptionsController < ApplicationController

  def new
    @patient = Patient.find_by(id: params[:patient_id])
    @prescription = Prescription.new
    @drugs = @prescription.drugs.build

  end



  def create
      @prescription = Prescription.create(experition_date: params["experiation"], pharmacy_name: params[:pharmacy][:name], pharmacy_address:params[:pharmacy][:address], notes:params[:note], diagnosis:params[:diagnosis])
      patient= Patient.find_by(id: params["pharmacy"]["patient"])
      @prescription.patient_id = patient.id
      @prescription.save

      drugs = params["prescription"]["drugs"]["name"]
      drugs.each do |drug|
        @prescription.drugs.find_or_create_by(name: drug)
      end

      refills = params["prescription"]["drugs"]["refill"]

      @prescription.drug_prescriptions.zip(refills).each do |presription_drug, refill|
        presription_drug.refill = refill
        presription_drug.save
      end

      redirect_to prescription_path(@prescription)
  end


  def show
    @prescription = Prescription.find_by(id: params[:id])
  end

  def google_pharmacies
    @client = GooglePlaces::Client.new("AIzaSyCrFym4iM3Lnh6TGX4QNB_jZcpCIDE33Fk")
    @result = @client.spots(params["lat"],params["lng"], :types => 'pharmacy', :keyword => "walgreens", :radius => 500)
    respond_to do |f|
      f.json{render :json => @result.to_json}
    end
  end


  private

  def prescription_params
    params.require(:prescription).permit(:bday)
  end

  def drug_params
    params.require(:prescription).permit(:drugs)
  end

end
