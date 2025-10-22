class CreateFirstNames < ActiveRecord::Migration[8.1]
  def change
    create_table :first_names do |t|
      t.string :content

      t.timestamps
    end
    add_index :first_names, :content, unique: true
  end
end
