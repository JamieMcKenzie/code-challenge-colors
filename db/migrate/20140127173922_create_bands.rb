class CreateStill < ActiveRecord::Migration
  def change
    create_table(:stills) do |t|
      t.string :name
    end
  end
end
