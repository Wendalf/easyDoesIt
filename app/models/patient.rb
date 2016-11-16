class Patient < ApplicationRecord
  belongs_to :doctor
  has_many :prescriptions
  has_many :drug_prescriptions, through: :prescriptions
end
