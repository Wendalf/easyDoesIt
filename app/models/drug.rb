class Drug < ApplicationRecord
  has_many :alerts, dependent: :destroy
  has_many :drug_prescriptions, dependent: :destroy
  has_many :prescriptions, through: :drug_prescriptions
end
