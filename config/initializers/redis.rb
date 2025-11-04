redis_url = ENV.fetch("REDIS_URL", "redis://localhost:6379/0")

$redis = Redis.new(url: redis_url)

puts "Connecting to Redis at #{redis_url}..."

$redis.ping
