class Sex < ApplicationRecord
  has_many :people

  validates :value, presence: true, inclusion: { in: %w[M F] }
end
