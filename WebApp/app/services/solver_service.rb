class SolverService
  class << self
    def solve(universe)
      puts "-----------------------"
      puts "hello ! i am and my universe is", universe
      puts "-----------------------"
      case universe.count
      when 0
        999
      when 1
        1
      when 2
        1.5
      else
        discriminators = Column.all.to_a
        # p "disc:", discriminators
        # p "univ:", universe

        p_of_correct_starter = 1.0 / universe.count
        p_of_wrong_starter = 1 - p_of_correct_starter

        starter = universe.delete_at 0

        discrim = discriminators.delete_at 0
        value_of_starter = starter.content_for discrim

        discrim_outcome_true = universe.select { |person| (person.content_for discrim) == value_of_starter }
        discrim_outcome_false = universe.reject { |person| (person.content_for discrim) == value_of_starter }

        p_of_true_discrimator = discrim_outcome_true.count.to_f / universe.count
        p_of_false_discrimator = discrim_outcome_false.count.to_f / universe.count

        # esperance += p_of_true_discrimator * get_esp(discrim_outcome_true) +
        #            p_of_false_discrimator * get_esp(discrim_outcome_false)

        #      esperance

        # get_esp([ 3, 4, 6, 5 ])

        puts "starter for this experiment is", starter
        puts "-> going into true for " + p_of_true_discrimator.to_s + " probabilty"
        esperance_of_true_dis = solve(discrim_outcome_true)
        puts "we're back from true! esperance is " + esperance_of_true_dis.to_s
        puts "-> going into false for " + p_of_false_discrimator.to_s + " probabilty"
        esperance_of_false_dis = solve(discrim_outcome_false)
        puts "we're back from false! esperance is " + esperance_of_false_dis.to_s

        esperance_of_branches = p_of_true_discrimator * esperance_of_true_dis +
                                p_of_false_discrimator * esperance_of_false_dis
        esperance_of_branches += 1
        p_of_correct_starter + p_of_wrong_starter * esperance_of_branches
      end
    end
  end
end
