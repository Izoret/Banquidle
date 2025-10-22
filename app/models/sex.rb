class Sex < ApplicationRecord
  has_many :people

  validates :value, presence: true, inclusion: { in: ['M', 'F'] }
end
