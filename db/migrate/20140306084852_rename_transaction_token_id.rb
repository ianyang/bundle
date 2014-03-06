class RenameTransactionTokenId < ActiveRecord::Migration
  def change
    rename_column :transactions, :transaction_token_id, :token
  end
end
