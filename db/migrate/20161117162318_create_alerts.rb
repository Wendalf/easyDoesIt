class CreateAlerts < ActiveRecord::Migration[5.0]
  def change
    create_table :alerts do |t|
      t.integer :patient_id
      t.integer :drug_id
      t.datetime :time
      t.integer :prescription_id

      t.timestamps
    end
  end
end
