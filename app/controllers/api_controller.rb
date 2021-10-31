class ApiController < ApplicationController
  def now
    # 重い処理をしているつもり
    sleep 1

    # レスポンスを返す
    render json: {
      current: Time.now
    }
  end
end
