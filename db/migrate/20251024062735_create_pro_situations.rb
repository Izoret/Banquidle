class CreateProSituations < ActiveRecord::Migration[8.1]
  def change
    create_table :pro_situations do |t|
      t.string :content

      t.timestamps
    end
    add_index :pro_situations, :content, unique: true
  end
end
