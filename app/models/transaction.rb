class Transaction < ActiveRecord::Base
  has_many :items
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :discount_rate, :inclusion => 0..100
  validates :email, presence: true
  before_create :build_token
  accepts_nested_attributes_for :items

  private
  def build_token
    self.token = SecureRandom.hex(12)
    true
  end
end