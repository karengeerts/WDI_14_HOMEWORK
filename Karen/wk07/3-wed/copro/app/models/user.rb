class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :projects
  has_many :likes
end
