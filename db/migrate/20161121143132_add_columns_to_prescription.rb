class AddColumnsToPrescription < ActiveRecord::Migration[5.0]
  def change
    add_column :prescriptions, :pharmacy_name, :string
    add_column :prescriptions, :pharmacy_address, :string
  end
end
