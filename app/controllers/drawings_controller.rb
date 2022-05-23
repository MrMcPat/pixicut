class DrawingsController < ApplicationController
    def index
        render json: Drawing.all.order(created_at: :desc)
    end

    def show
        render json: Drawing.find(params[:id])
    end

    def create
        render json: Drawing.create!(drawing_params), status: :created
    end

    def update
        drawing = Drawing.find(params[:id])
        drawing.update!(drawing_params)
        render json: drawing
    end

    def destroy
        drawing.find(params[:id]).destroy
        head :no_content
    end

    private

    def drawing_params
        params.permit(:user_id, :name, :dimensions, :frame_count, :is_ready, :like_count, :user_liked)
    end
end
