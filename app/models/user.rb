class User < ApplicationRecord
    has_secure_password

    attr_accessor :old_password

    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true, length: {maximum: 20}
    validates :first_name, length: {maximum: 30}
    validates :last_name, length: {maximum: 30}
    validates :description, length: {maximum: 250}
end
