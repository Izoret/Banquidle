class Column < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
