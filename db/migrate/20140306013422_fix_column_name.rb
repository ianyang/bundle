class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :transactions, :discourt_rate, :discount_rate
  end
end
