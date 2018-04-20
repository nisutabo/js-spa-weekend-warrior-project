class AddCropIdToFarm < ActiveRecord::Migration[5.1]
  def change
    add_column :farms, :crop_id, :integer
  end
end
