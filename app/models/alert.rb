class Alert < ApplicationRecord
  belongs_to :patient
  belongs_to :drug
  belongs_to :prescription
end

