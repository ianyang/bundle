class ChangeTransactionToken < ActiveRecord::Migration
  def change
    change_column :transactions, :transaction_token_id, :string
  end
end