class GameStats
  def self.todays_guesses(user_id)
    key = "guesses:#{Date.today}:#{user_id}"
    $redis.smembers key
  end

  def self.add_guess_for(user_id, quickname)
    key = "guesses:#{Date.today}:#{user_id}"
    $redis.sadd(key, quickname)
    $redis.sadd("players:#{Date.today}", user_id)
  end

  def self.last_performance_dictionary
    players = $redis.smembers "players:#{Date.today}"
    dict = {}
    players.each do |player|
      dict[player] = $redis.scard "guesses:#{Date.today}:#{player}"
    end
    dict
  end
end
