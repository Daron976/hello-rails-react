class AddColumnToMessages < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :msg, :text
  end
end
