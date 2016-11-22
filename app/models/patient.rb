class Patient < ApplicationRecord
  belongs_to :user
  has_many :alerts, dependent: :destroy
  has_many :prescriptions, dependent: :destroy
  has_many :drug_prescriptions, through: :prescriptions
  validates :name, :medical_history, :height, :weight, :health_history, :phone_number,
  :address, :age, :sex, :email, :dob, presence: true


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
