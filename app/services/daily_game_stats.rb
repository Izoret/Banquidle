# This class handles all reading and writing to Redis for a user"s daily game.
# It ensures data is stored under a unique key for the user and the date,
# and that the key is set to expire after 24 hours.

class DailyGameStats
  TTL = 25.hours.to_i

  def initialize(username)
    @username = username
    @date_string = Time.zone.now.to_date.to_s
    @key = "daily_game:#{@date_string}:#{@username}"
  end

  def stats
    data = $redis.hgetall(@key)

    if data.empty?
      { username: @username, date: @date_string, guesses: [] }
    else
      {
        username: @username,
        date: @date_string,
        guesses: data["guesses"] ? JSON.parse(data["guesses"]) : []
      }
    end
  end

  def add_guess(guess_string)
    current_stats = self.stats
    current_guesses = current_stats[:guesses]

    current_guesses << guess_string

    $redis.hset(@key, "guesses", current_guesses.to_json)

    set_expiry_if_needed
  end

  private

  def set_expiry_if_needed
    # `ttl` returns -1 if no expiry is set, -2 if key doesn"t exist
    if $redis.ttl(@key) == -1
      $redis.expire(@key, TTL)
    end
  end
end
