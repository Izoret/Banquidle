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

  def get_linked
    linked_ids =
      LinkedAttributeContents.where(attribute_content_1: self.id).pluck(:attribute_content_2) +
      LinkedAttributeContents.where(attribute_content_2: self.id).pluck(:attribute_content_1)

    AttributeContent.where(id: linked_ids.uniq)
  end
end
