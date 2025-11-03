class TodaysPersonService
  def self.call
    quicknames = Person.order(:quickname).pluck(:quickname)
    hex = Digest::MD5.hexdigest(Date.today.to_s)
    idx = hex.to_i(16) % quicknames.size
    selected_quickname = quicknames[idx]
    Person.find_by(quickname: selected_quickname)
  end
end
