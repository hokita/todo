class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :content, null: false, comment: 'タスク内容'
      t.integer :status, null: false, comment: 'タスクステータス'
      t.timestamps
    end
  end
end
