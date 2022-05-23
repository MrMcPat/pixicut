class FramesController < ApplicationController
    def index
        render json: Frame.all.order(created_at: :desc)
    end

    def show
        render json: Frame.find(params[:id])
    end

    def create
        render json: Frame.create!(frame_params), status: :created
    end

    def update
        frame = Frame.find(params[:id])
        frame.update!(frame_params)
        render json: frame
    end

    def destroy
        frame.find(params[:id]).destroy
        head :no_content
    end

    private

    def frame_params
        params.permit(:drawing_id, :image_url)
    end
end
