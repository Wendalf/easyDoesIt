class Prescription < ApplicationRecord
  belongs_to :patient
  has_many :alerts, dependent: :destroy
  has_many :drug_prescriptions, dependent: :destroy
  has_many :drugs, through: :drug_prescriptions
end
