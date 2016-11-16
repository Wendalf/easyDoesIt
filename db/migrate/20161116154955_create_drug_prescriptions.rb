class CreateDrugPrescriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :drug_prescriptions do |t|
      t.integer :drug_id
      t.integer :prescription_id
      t.integer :refill
      t.integer :frequency
      t.timestamps
    end
  end
end
