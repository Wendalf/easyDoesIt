class AlertsController < ApplicationController



  def new
  end


  def create

    t = params["time"]
    t.each do |time|
      if time != ""
       result = time.to_datetime
       @alert = Alert.create(time: result, patient_id: params["patient_id"], drug_id: params["drug_id"], prescription_id: params["prescription_id"])
      end
    end
    redirect_to user_patient_path(@alert.patient.user, @alert.patient)
  end



  private










end
