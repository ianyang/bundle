class AddTransactionTokenRefToTransactions < ActiveRecord::Migration
  def change
    add_reference :transactions, :transaction_token_id, index: true
  end
end
