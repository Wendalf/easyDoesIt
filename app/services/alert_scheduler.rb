class AlertScheduler

  def self.check_and_send_alert
    
    alerts = Alert.all

    alerts.each do |alert|
      if alert.time == Time.now.to_datetime
        self.send_alert(alert)
      end
    end

    puts "method is being called." 
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


