class FollowsController < ApplicationController
    def index
        render json: Follow.all.order(created_at: :desc)
    end

    def show
        render json: Follow.find(params[:id])
    end

    def create
        render json: Follow.create!(follow_params), status: :created
    end

    def update
        follow = Follow.find(params[:id])
        follow.update!(follow_params)
        render json: follow
    end

    def destroy
        follow.find(params[:id]).destroy
        head :no_content
    end

    private

    def follow_params
        params.permit(:user_id, :followed_user_id)
    end
end
