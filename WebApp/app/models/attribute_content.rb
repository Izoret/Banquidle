class AttributeContent < ApplicationRecord
  validates :value, presence: true

  has_and_belongs_to_many :people
  belongs_to :column

  def maybe_genderize_for(person)
    return value unless translation_f

    sex_col = Column.find_by name: "Sexe"
    return value unless sex_col

    sex = person.content_for(sex_col)&.value
    sex == "F" ? translation_f : value
  end
end
