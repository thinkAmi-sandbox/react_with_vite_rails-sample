class OpenapiClientJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # OpenAPIクライアントを使う場合
    # response = fetch_by_openapi_client

    # 素のfaradayを使う場合
    response = fetch_by_faraday

    puts response
  end

  private def fetch_by_openapi_client
    api_instance = OpenapiClient::ArrayInQueryParamsApi.new

    api_instance.fetch_array_in_query_params_fruits({'names': %w[バナナ マンゴー]})
    # => typhoeusの場合
    # "/api/array_in_query_params/fruits?names%5B%5D%5B0%5D=%E3%83%90%E3%83%8A%E3%83%8A&names%5B%5D%5B1%5D=%E3%83%9E%E3%83%B3%E3%82%B4%E3%83%BC"
    # paramsには `"names"=>[{"0"=>"バナナ", "1"=>"マンゴー"}]` が入る
    #
    # faradayの場合
    # => GET "/api/array_in_query_params/fruits?names%5B%5D%5B%5D=%E3%83%90%E3%83%8A%E3%83%8A&names%5B%5D%5B%5D=%E3%83%9E%E3%83%B3%E3%82%B4%E3%83%BC"
    # => paramsには `"names"=>[["バナナ"], ["マンゴー"]]` が入る
  end

  private def fetch_by_faraday
    response = Faraday.get('http://localhost:7100/api/array_in_query_params/fruits', names: %w[バナナ マンゴー])
    # => GET "/api/array_in_query_params/fruits?names%5B%5D=%E3%83%90%E3%83%8A%E3%83%8A&names%5B%5D=%E3%83%9E%E3%83%B3%E3%82%B4%E3%83%BC"
    # => paramsには `{"names"=>["バナナ", "マンゴー"]}` が入る
    response.body
  end
end
