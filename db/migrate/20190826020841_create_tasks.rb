class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :content, null: false
      t.string :status, limit: 1, null: false
      t.timestamps
    end
  end
end
