class LinkedColumns < ApplicationRecord
  validates :column_1, presence: true, uniqueness: true
  validates :column_2, presence: true, uniqueness: true
end
