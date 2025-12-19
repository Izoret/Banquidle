class TodaysPersonService
  def self.get_daily
    quicknames = Person.order(:quickname).pluck(:quickname)
    hex = Digest::MD5.hexdigest((Date.today).to_s)
    idx = hex.to_i(16) % quicknames.size
    selected_quickname = quicknames[idx]
    Person.find_by(quickname: selected_quickname)
  end

  def self.get_determinist
    Person.find_by(quickname: "zozo")
  end
end
