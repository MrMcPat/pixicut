class FrameSerializer < ActiveModel::Serializer
  attributes :id, :drawings_id, :image_url
end
