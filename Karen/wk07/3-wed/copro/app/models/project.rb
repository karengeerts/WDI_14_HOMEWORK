class Project < ApplicationRecord
  mount_uploader :preview, PreviewUploader
  has_many :comments
  belongs_to :user
  has_many :likes
end
