class AlertsController < ApplicationController


  def create
    @patient = Patient.find(params[:patient_id])
    @drug = Drug.find(params[:drug_id])
    @timeOne = params[:alert1].to_datetime; @timeTwo = params[:alert2].to_datetime; @timeThree = params[:alert3].to_datetime;
    @alertOne = Alert.create(time:@timeOne, patient:@patient, drug:@drug) if params[:alert1] != ""
    @alertTwo = Alert.create(time:@timeTwo, patient:@patient, drug:@drug) if params[:alert2] != ""
    @alertThree = Alert.create(time:@timeThree, patient:@patient, drug:@drug) if params[:alert3] != ""

    @created_alerts = [@alertOne,@alertTwo,@alertThree]

    respond_to do |f|
      f.json{render :json => @created_alerts.to_json}
    end
  end
# =======
#
#
#
  # def new
  # end


  # def create

  #   t = params["time"]
  #   t.each do |time|
  #     if time != ""
  #      result = time.to_datetime
  #      @alert = Alert.create(time: result, patient_id: params["patient_id"], drug_id: params["drug_id"], prescription_id: params["prescription_id"])
  #     end
  #   end
  #   redirect_to user_patient_path(@alert.patient.user, @alert.patient)
  # end



  # private
#
#
#
#
#
#
#
#
#
#
# >>>>>>> master
end
