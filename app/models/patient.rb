class Patient < ApplicationRecord
  belongs_to :user
  has_many :prescriptions
  has_many :drug_prescriptions, through: :prescriptions
end
