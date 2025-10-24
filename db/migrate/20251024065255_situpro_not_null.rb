class SituproNotNull < ActiveRecord::Migration[8.1]
  def change
    change_column_null :people, :pro_situation_id, false
  end
end
