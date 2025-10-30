# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

etu = ProSituation.find_or_create_by!(content: "Étudiant")

m = Sex.find_or_create_by!(value: "M")
f = Sex.find_or_create_by!(value: "F")

paris = Location.find_or_create_by!(content: "Paris")

Person.create(
  quickname: "test",
  first_name: FirstName.find_or_create_by!(content: "testP"),
  last_name: LastName.find_or_create_by!(content: "testN"),
  sex: m,
  pro_situation: etu,
  location: paris
)
