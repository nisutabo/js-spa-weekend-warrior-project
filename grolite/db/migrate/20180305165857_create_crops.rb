class CreateCrops < ActiveRecord::Migration[5.1]
  def change
    create_table :crops do |t|

      t.timestamps
    end
  end
end
