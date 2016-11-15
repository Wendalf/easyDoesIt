class DrugPrescription < ApplicationRecord
  belongs_to :prescription
  belongs_to :drug
end
