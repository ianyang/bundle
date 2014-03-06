class ChangeDiscountRateDefault < ActiveRecord::Migration
  def change
    change_column :transactions, :discount_rate, :integer, :default => 0
  end
end
