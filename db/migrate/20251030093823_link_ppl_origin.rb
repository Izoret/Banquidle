class LinkPplOrigin < ActiveRecord::Migration[8.1]
  def change
    add_reference :people, :origin, null: false, foreign_key: true
  end
end
