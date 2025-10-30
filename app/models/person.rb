class Person < ApplicationRecord
  belongs_to :first_name
  belongs_to :last_name
  belongs_to :sex
  belongs_to :pro_situation
  belongs_to :location

  validates :quickname, presence: true, uniqueness: true
end
