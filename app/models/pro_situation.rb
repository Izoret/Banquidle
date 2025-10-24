class ProSituation < ApplicationRecord
  has_many :people

  validates :content, presence: true, uniqueness: true
end
