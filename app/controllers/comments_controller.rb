class CommentsController < ApplicationController
    def index
        render json: Comment.all.order(created_at: :desc)
    end

    def show
        render json: Comment.find(params[:id])
    end

    def create
        render json: Comment.create!(comment_params), status: :created
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: comment
    end

    def destroy
        comment.find(params[:id]).destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:user_id, :drawing_id, :comment)
    end
end
