class CreateOrigins < ActiveRecord::Migration[8.1]
  def change
    create_table :origins do |t|
      t.string :content

      t.timestamps
    end
    add_index :origins, :content, unique: true
  end
end
