class SolverService
  class << self
    def solve(whole_universe)
      puts "---"
      puts "inside branch, universe is :", (whole_universe.empty? ? "[]" : whole_universe)
      puts "---"
      case whole_universe.count
      when 0
        999
      when 1
        1
      when 2
        1.5
      else
        candidates = {}

        p_of_correct_starter = 1.0 / whole_universe.count
        p_of_wrong_starter = 1 - p_of_correct_starter

        whole_universe.each do |starter|
          reduced_universe = whole_universe.clone
          reduced_universe.delete starter

          branches = discriminate(reduced_universe, starter)
          esperance_of_branches = 0
          puts "\nstarter for this experiment is " + starter.to_s
          branches.each do |branch|
            p_of_branch = branch.count.to_f / reduced_universe.count

            puts "-> going into branch with P(" + p_of_branch.to_s + ")"
            esperance = solve(branch)
            puts "back from branch P(" + p_of_branch.to_s + "); Esperance = " + esperance.to_s

            esperance_of_branches += p_of_branch * esperance
          end

          esperance_of_branches += 1

          candidates[starter.quickname] = (p_of_correct_starter + p_of_wrong_starter * esperance_of_branches)
                                            .round(7)
        end

        puts "\nhere are scores for each starter:", candidates, "\n"

        candidates.values.min
      end
    end

    private

    def discriminate(universe, starter)
      columns = Column.all.to_a

      starter_values = columns.map { |col| starter.content_for(col) }

      outcomes = Array.new(3 ** columns.count) { [] }

      universe.each do |person|
        ternary = 0

        columns.each_with_index do |parameter, idx|
          person_attribute = person.content_for(parameter)
          ternary = ternary * 3

          expression_true = starter_values[idx] == person_attribute
          expression_partial =
            starter_values[idx]&.get_linked&.include?(person_attribute) ||
            (starter_values[idx]&.value == person.content_for(parameter.linked_column)&.value)

          if expression_true
            # nothing to move
          elsif expression_partial
            ternary += 1
          else
            ternary += 2
          end
        end

        outcomes[ternary] << person
      end

      outcomes
    end
  end
end
