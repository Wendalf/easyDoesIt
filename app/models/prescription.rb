class Prescription < ApplicationRecord
  belongs_to :patient
  has_many :drug_prescriptions
  has_many :drugs, through: :drug_prescriptions
end
