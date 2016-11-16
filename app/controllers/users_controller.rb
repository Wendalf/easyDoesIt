class UsersController < ApplicationController
skip_before_filter :verify_authenticity_token, :only => :create

  def download_csv
    arr = [];
    current_user.patients.each do |patient|
      arr << patient.name+","+patient.medical_history+","+patient.height+","+
      patient.weight+","+patient.health_histroy+"" ;
    end
  end
  
end
