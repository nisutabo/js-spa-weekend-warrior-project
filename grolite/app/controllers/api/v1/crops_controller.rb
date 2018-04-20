class Api::V1::CropsController < ApplicationController


  def index
    @crops = Crop.all
    render json: @crops
  end

  def show
    @crop = Crop.find(params[:id])
    render json: @crop
  end

  def create
    @crop = Crop.new(name: params[:name])
    if @crop.save
      render json: @crop
    else
      render json: {error: "Invalid Entry"}
    end
  end

  def update
    @crop = Crop.find(params[:id])
    @crop.update(name: crop)
    render json: @crop
  end

  def destroy
    @crop = Crop.find(params[:id])
    @crop.destroy
    render json: { message: "bye bye"}
  end


end
