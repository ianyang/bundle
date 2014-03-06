json.array!(@transactions) do |transaction|
  json.extract! transaction, :id, :price, :discourt_rate, :price
  json.url transaction_url(transaction, format: :json)
end
