require 'json'

get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  value = params[:value] != "" ? params[:value].to_i : nil
  @roll = value ? Roll.create({ value: value }) : Roll.create
  @roll.to_json
  # erb :index  # HINT: what does this do? what should we do instead?
end
