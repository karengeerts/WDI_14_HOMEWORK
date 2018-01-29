class AddSubjectToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :subject, :string
  end
end
