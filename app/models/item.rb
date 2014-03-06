class Item < ActiveRecord::Base
  belongs_to :transaction
  validates :title, :photo_file_name, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
end
