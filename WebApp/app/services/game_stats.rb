class GameStats
  class << self
    def todays_guesses(user_id)
      $redis.smembers "guesses:#{Date.today}:#{user_id}"
    end

    def add_guess(user_id, quickname)
      save_with_ttl("guesses:#{Date.today}:#{user_id}", quickname)
      save_with_ttl("players:#{Date.today}", user_id)
    end

    def last_performance_dictionary
      dict = {}
      (Date.today.monday? ? Date.the_three_days_before_today : [ Date.yesterday ]).each do |day|
        $redis.smembers("players:#{day}").each do |player|
          dict[player] = [ dict[player], $redis.scard("guesses:#{day}:#{player}") ].compact.min
        end
      end
      dict
    end

    private

    def save_with_ttl(key, val)
      $redis.sadd(key, val)
      $redis.expire(key, 96.hours.in_seconds, nx: true)
    end
  end
end
