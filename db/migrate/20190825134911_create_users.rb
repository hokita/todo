class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :nickname, limit: 50, null: false
      t.string :password_digest, null: false
      t.string :authority, limit: 1, null: false
      t.string :status, limit: 1, null: false
      t.timestamps
    end
  end
end
