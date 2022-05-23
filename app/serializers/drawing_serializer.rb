class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :frame_count, :is_ready, :like_count, :user_liked, :frames

  has_many :frames
end
