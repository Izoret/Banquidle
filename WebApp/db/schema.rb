# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2025_12_19_123512) do
  create_table "people", force: :cascade do |t|
    t.string "quickname", null: false
    t.integer "birth_day", null: true
    t.integer "birth_month", null: true

    t.index [ "quickname" ], name: "index_people_on_quickname", unique: true
  end

  create_table "attribute_contents_people", id: false, force: :cascade do |t|
    t.belongs_to :person, index: true
    t.belongs_to :attribute_content, index: true
  end

  create_table "attribute_contents", force: :cascade do |t|
    t.string "value", null: false

    t.integer "row_attribute_id", null: false
  end

  create_table "row_attributes", force: :cascade do |t|
    t.string "name", null: false
  end

  add_foreign_key "attribute_contents", "row_attributes"
end
