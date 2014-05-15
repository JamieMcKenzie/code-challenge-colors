get '/' do
  erb :index
end

post '/color' do
  color = "#" + "%06x" % (rand * 0xffffff)
  { color: color }.to_json
end

post '/save' do
  p params
  # { name: name }.to_json
end


