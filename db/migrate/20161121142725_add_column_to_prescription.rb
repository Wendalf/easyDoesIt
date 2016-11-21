class AddColumnToPrescription < ActiveRecord::Migration[5.0]
  def change
    add_column :prescriptions, :notes, :string
  end
end
