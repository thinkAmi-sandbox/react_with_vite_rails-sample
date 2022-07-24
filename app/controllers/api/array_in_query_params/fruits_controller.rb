class Api::ArrayInQueryParams::FruitsController < ApplicationController
  protect_from_forgery with: :null_session, only: :create

  def index
    names = permitted_params[:names] || ['みかん']

    fruits = names.map.with_index { |name, i| { id: i, name: name } }

    render json: { fruits: fruits }
  end

  def create
    OpenapiClientJob.perform_later
  end

  def permitted_params
    params.permit(names: [])
  end
end