class ChangePriceDefault < ActiveRecord::Migration
  def change
    change_column :transactions, :price, :integer, :default => 0
  end
end
