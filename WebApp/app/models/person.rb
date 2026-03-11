class Person < ApplicationRecord
  validates :quickname, presence: true, uniqueness: true

  has_and_belongs_to_many :attribute_contents

  def content_for(column)
    attribute_contents.find_by column: column
  end

  def is_birthday?
    birth_day == Date.today.day and birth_month == Date.today.month
  end
end
