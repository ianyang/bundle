class AddTransactionRefToItems < ActiveRecord::Migration
  def change
    add_reference :items, :transaction, index: true
  end
end
