class Api::TryRedirect::FruitsController < ApplicationController
  def show
    case params[:id]
    when '1'
      redirect_to after_redirect_erb_fruits_path
    when '2'
      redirect_to after_redirect_erb_fruits_path, status: :see_other
    when '3'
      render status: :found, json: {path: params[:id]}
    when '4'
      render status: :found, location: after_redirect_erb_fruits_path, json: {path: params[:id]}
    else
      render json: {fruits: 'apple'}
    end
  end
end