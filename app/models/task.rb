class Task < ActiveRecord::Base
  validates :title, :length => { :minimum => 1 }
end
