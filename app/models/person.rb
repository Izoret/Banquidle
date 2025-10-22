class Person < ApplicationRecord
  belongs_to :first_name
  belongs_to :last_name
  belongs_to :sex

  validates :quickname, presence: true, uniqueness: true
end
