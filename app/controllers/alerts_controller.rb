class AlertsController < ApplicationController
  
  def create
    @patient = Patient.find(params[:patient_id])
    @drug = Drug.find(params[:drug_id])
    @timeOne = params[:alert1]; @timeTwo = params[:alert2]; @timeThree = params[:alert3]

    @alertOne = Alert.create(time:@timeOne, patient:@patient, drug:@drug)
    @alertTwo = Alert.create(time:@timeOne, patient:@patient, drug:@drug)
    @alertThree = Alert.create(time:@timeOne, patient:@patient, drug:@drug)

    @created_alerts = [@alertOne,@alertTwo,@alertThree]

    respond_to do |f|
      f.json{render :json => @created_alerts.to_json}
    end
  end
end
