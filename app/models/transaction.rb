class Transaction < ActiveRecord::Base
  has_many :items
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :discount_rate, :inclusion => 0..100
  validates :email, presence: true
end