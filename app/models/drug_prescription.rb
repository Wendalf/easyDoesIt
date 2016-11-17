class DrugPrescription < ApplicationRecord
  belongs_to :prescription
  belongs_to :drug
  has_many :alerts
end
