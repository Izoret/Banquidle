class AttributeContent < ApplicationRecord
  validates :value, presence: true

  has_and_belongs_to_many :people
  belongs_to :row_attribute
end
