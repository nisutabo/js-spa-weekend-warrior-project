class AddFarmerToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :farmer, :boolean
  end
end
