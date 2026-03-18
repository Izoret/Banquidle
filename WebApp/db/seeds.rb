default = Rails.root.join('db', 'seeds', 'base.rb')
custom = Rails.root.join('db', 'seeds', 'custom.rb')

if File.exist? custom
  load custom
else
  load default
end
