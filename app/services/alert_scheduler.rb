class AlertScheduler

  def self.check_and_send_alert
    
    alerts = Alert.all

    alerts.each do |alert|
      alert_time = alert.time.strftime("%H%M").to_i
      time_now = Time.now.strftime("%H%M").to_i
      edate = alert.prescription.experition_date.gsub("-", "").to_i
      if alert_time == time_now && edate > Time.now.to_datetime.strftime("%Y%m%d").to_i
        self.send_alert(alert)
      end
    end
  end

  def self.send_alert(alert)
    @twilio_number = ENV['TWILIO_FROM_NUMBER'] 
    @client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']
    msg = "#{alert.patient.name}, please don't forget to take your #{alert.drug.name}."
    paitent_number = "+1" + "#{alert.patient.phone_number}"
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => paitent_number,
      :body => msg
    )
  end

end


