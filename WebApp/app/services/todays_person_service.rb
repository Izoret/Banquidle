class TodaysPersonService
  class << self
    def get_daily_target
      if (person = born_today)
        return person
      end

      Person.find_by quickname: get_target(Date.today)
    end

    def get_daily_banned_quicknames
      get_banned(Date.today, 5)
    end

    private

    def get_target(date)
      quicknames = Person.order(:quickname).pluck(:quickname)
      md5_hex = Digest::MD5.hexdigest(date.to_s)
      md5_decimal = md5_hex.to_i 16

      quicknames[md5_decimal % quicknames.size]
    end

    def get_banned(date, number_of_banned)
      quicknames = Person.order(:quickname).pluck(:quickname)
      md5_hex = Digest::MD5.hexdigest date.to_s
      md5_decimal = md5_hex.to_i 16

      step = 10000
      banned = []

      1.upto(number_of_banned) do |n|
        if md5_decimal == 0
          raise "You have banned to many people for this size of a md5 decimal bro"
          # yes this is stupid. but it's hand-written :D
        end
        idx = md5_decimal % step
        banned << quicknames.delete_at(idx % quicknames.size)
        md5_decimal /= step
      end

      banned
    end

    def born_today
      Person.where(birth_day: Date.today.day, birth_month: Date.today.month).sample
    end
  end
end
