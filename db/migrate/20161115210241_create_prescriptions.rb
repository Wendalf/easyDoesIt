class CreatePrescriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :prescriptions do |t|
      t.integer :patient_id
      t.string :experition_date
      t.boolean :active, :default => true
      t.timestamps
    end
  end
end
