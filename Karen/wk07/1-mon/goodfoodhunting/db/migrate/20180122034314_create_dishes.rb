class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :title
      t.text :image_url

      t.timestamps
    end
  end
end
