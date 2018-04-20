class Crop < ApplicationRecord
  has_many :users, through: :farm
end
