class AddColumnDiagnosisToPrescription < ActiveRecord::Migration[5.0]
  def change
    add_column :prescriptions, :diagnosis, :string
  end
end
