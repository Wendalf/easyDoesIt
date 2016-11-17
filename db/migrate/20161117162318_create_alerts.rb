class CreateAlerts < ActiveRecord::Migration[5.0]
  def change
    create_table :alerts do |t|
      t.string :name
      t.string :phone_number
      t.datetime :time
      t.string :time_zone
      t.integer :drug_prescription_id

      t.timestamps
    end
  end
end
