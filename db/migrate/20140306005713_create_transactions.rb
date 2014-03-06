class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :price
      t.integer :discourt_rate
      t.integer :price

      t.timestamps
    end
  end
end
