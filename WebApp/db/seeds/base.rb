# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

prenom = Column.create!(name: "Prénom")
nom = Column.create!(name: "Nom")
sex = Column.create!(name: "Sexe")

name_unknown = AttributeContent.create!(column: nom, value: "?")

male = AttributeContent.create!(column: sex, value: "M")
female = AttributeContent.create!(column: sex, value: "F")

bayrou = Person.create(quickname: "Bayrou")
bayrou.attribute_contents << [
  AttributeContent.create_or_find_by!(column: prenom, value: "François"),
  AttributeContent.create_or_find_by!(column: nom, value: "Bayrou"),
  male
]

fillon = Person.create(quickname: "Fillon?")
fillon.attribute_contents << [
  AttributeContent.create_or_find_by!(column: prenom, value: "François"),
  name_unknown,
  male
]

louane = Person.create(quickname: "Louane")
louane.attribute_contents << [
  AttributeContent.create_or_find_by!(column: prenom, value: "Louane"),
  name_unknown,
  female
]