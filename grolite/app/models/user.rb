class User < ApplicationRecord
  has_many :crops, through: :farm
end
