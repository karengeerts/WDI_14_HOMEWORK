class Project < ApplicationRecord
  mount_uploader :preview, PreviewUploader
  has_many :comments

end
