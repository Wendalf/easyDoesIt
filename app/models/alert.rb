class Alert < ApplicationRecord
  belongs_to :patient
  belongs_to :drug
end

