# DISCLAIMER : i know monkey patching is bad
# i just wanted to try it
# it's just one static function with a ridiculous name so in practice it will not break anything
# best regards
class Date
  def self.the_three_days_before_today
    [ Date.yesterday.yesterday.yesterday, Date.yesterday.yesterday, Date.yesterday ]
  end
end
