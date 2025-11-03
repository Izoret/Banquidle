module Api
  class PeopleController < ActionController::API
    def index
      people = Person.joins(:first_name, :last_name)
                     .select("quickname, first_names.content AS first_name_content, last_names.content AS last_name_content")
      render json: people.as_json(only: [ :quickname ], methods: [ :first_name_content, :last_name_content ])
    end

    def validate
      quickname = params[:quickname]

      guess = Person.find_by_quickname(quickname)
      right = TodaysPersonService.call

      person_attributes = Person.attribute_names.select { |attr| attr.end_with?("_id") }
      validation_result = person_attributes.each_with_object({}) do |attr, result|
        attribute_name = attr.sub(/_id\z/, "")
        guess_value = guess&.send(attr)
        right_value = right&.send(attr)
        result[attribute_name.to_sym] = (guess_value == right_value)
      end

      render json: validation_result
    end
  end
end
