class CreateSexes < ActiveRecord::Migration[8.1]
  def change
    create_table :sexes do |t|
      t.string :value

      t.timestamps
    end
  end
end
