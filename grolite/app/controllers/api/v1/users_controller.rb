class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(name: params[:name] location: params[:location])
    if @user.save
      render json: @user
    else
      render json: {error: "Invalid Entry"}
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(name: )
    render json: @user
  end

  def destroy
    @user = user.find(params[:id])
    @user.destroy
    render json: { message: "bye bye"}
  end

end
