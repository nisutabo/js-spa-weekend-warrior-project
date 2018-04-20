class AddUserIdToFarm < ActiveRecord::Migration[5.1]
  def change
    add_column :farms, :user_id, :integer
  end
end
