class Item < ActiveRecord::Base
  validates :title, :photo_file_name, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
end
