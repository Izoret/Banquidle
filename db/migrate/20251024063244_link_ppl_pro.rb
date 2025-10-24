class LinkPplPro < ActiveRecord::Migration[8.1]
  def change
    add_reference :people, :pro_situation, null: true, foreign_key: true
  end
end
