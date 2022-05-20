class Drawing < ApplicationRecord
    belongs_to :user
    has_many :frames, dependent: :destroy
    has_many :users, through: :comments
end
