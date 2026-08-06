class DailyGenerationService
  class << self
    def todays_answer
      if (person = born_today)
        return person
      end

      fqdns = Person.order(:fqdn).pluck(:fqdn)
      md5_hex = Digest::MD5.hexdigest(Date.today.to_s)
      md5_decimal = md5_hex.to_i 16
      fqdn = fqdns[md5_decimal % fqdns.size]

      Person.find_by fqdn: fqdn
    end

    def todays_banned_fqdns
      get_banned(Date.today, 5)
    end

    private

    def get_banned(date, number_of_banned)
      bannable = Person.order(:fqdn).without(todays_answer).pluck(:fqdn)
      md5_hex = Digest::MD5.hexdigest date.to_s
      md5_decimal = md5_hex.to_i 16

      step = 10000
      banned = []

      1.upto(number_of_banned) do |n|
        if md5_decimal == 0
          raise "You have banned too many people for this size of a md5 decimal bro"
          # yes this is stupid. but it's hand-written :D
        end
        idx = md5_decimal % step
        banned << bannable.delete_at(idx % bannable.size)
        md5_decimal /= step
      end

      banned
    end

    def born_today
      Person.where(birth_day: Date.today.day, birth_month: Date.today.month).sample
    end
  end
end
