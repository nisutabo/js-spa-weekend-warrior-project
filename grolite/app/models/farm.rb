class Farm < ApplicationRecord
  belongs_to :user
  belongs_to :crop
end
