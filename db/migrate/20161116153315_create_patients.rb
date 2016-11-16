class CreatePatients < ActiveRecord::Migration[5.0]
  def change
    create_table :patients do |t|
      t.integer :user_id
      t.string :name
      t.string :medical_history
      t.string :height
      t.string :weight
      t.string :health_history
      t.string :phone_number
      t.string :address
      t.integer :age
      t.string :sex
      t.string :email
      t.string :note

      t.timestamps
    end
  end
end
