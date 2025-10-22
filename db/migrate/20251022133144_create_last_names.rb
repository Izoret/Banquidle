class CreateLastNames < ActiveRecord::Migration[8.1]
  def change
    create_table :last_names do |t|
      t.string :content

      t.timestamps
    end
    add_index :last_names, :content, unique: true
  end
end
