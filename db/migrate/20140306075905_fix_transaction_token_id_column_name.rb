class FixTransactionTokenIdColumnName < ActiveRecord::Migration
  def change
    rename_column :transactions, :transaction_token_id_id, :transaction_token_id
  end
end
