class Column < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  def linked_column
    linked_ids =
      LinkedColumns.where(column_1: self.id).pluck(:column_2) +
      LinkedColumns.where(column_2: self.id).pluck(:column_1)

    Column.where(id: linked_ids.uniq).first
  end
end
