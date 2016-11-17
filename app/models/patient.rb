class Patient < ApplicationRecord
  belongs_to :doctor
  has_many :prescriptions
  has_many :drug_prescriptions, through: :prescriptions



  def send_message(msg)
    @twilio_number = ENV["TWILIO_FROM_NUMBER"]
    @client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => self.phone_number,
      :body => msg,
    )
    puts message.to
  end

end
