class CreatePeople < ActiveRecord::Migration[8.1]
  def change
    create_table :people do |t|
      t.string :quickname
      t.references :first_name, null: false, foreign_key: true
      t.references :last_name, null: false, foreign_key: true
      t.references :sex, null: false, foreign_key: true

      t.timestamps
    end
    add_index :people, :quickname, unique: true
  end
end
