class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :drawings_id, :comment
end
