class PatientsController < ApplicationController

  def index
  criteria = params["criteria"]
  search = params["input"]
  @patients = current_user.patients.where("#{criteria} = #{search}")
  respond_to do |f|
    f.json{render :json => @patients}
    f.html {redirect_to patients_path(@patients)}
  end
end
end
