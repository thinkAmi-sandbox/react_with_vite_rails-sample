require 'rails_helper'

RSpec.describe 'Api::ArrayInQueryParams::FruitsController', type: :request do
  let(:actual) { JSON.parse(response.body, symbolize_names: true) }
  describe 'GET /api/array_in_query_params/fruits' do
    context 'クエリ文字列なし' do
      context 'pathを使う版' do
        it 'みかんだけが固定でレスポンスされる' do
          get api_array_in_query_params_fruits_path

          assert_request_schema_confirm
          assert_response_schema_confirm(200)

          expect(actual).to eq({ fruits:[{id: 0, name: 'みかん'}] })
        end
      end

      context 'URLをハードコーディングする版' do
        it 'みかんだけが固定でレスポンスされる' do
          get '/api/array_in_query_params/fruits'

          assert_request_schema_confirm
          assert_response_schema_confirm(200)

          expect(actual).to eq({ fruits:[{id: 0, name: 'みかん'}] })
        end
      end
    end

    context 'クエリ文字列に配列を指定' do
      context 'pathを使う版' do
        it 'クエリ文字列で指定した配列の中身がレスポンスされる' do
          get api_array_in_query_params_fruits_path, params: {names: %w[りんご なし]}

          assert_request_schema_confirm
          assert_response_schema_confirm(200)

          expect(actual).to eq({ fruits:[{id: 0, name: 'りんご'}, {id: 1, name: 'なし'}] })
        end
      end

      context 'URLをハードコーディングする版' do
        it 'クエリ文字列で指定した配列の中身がレスポンスされる' do
          query_string = %w[りんご なし].to_query('names')
          get "/api/array_in_query_params/fruits?#{query_string}"

          assert_request_schema_confirm
          assert_response_schema_confirm(200)

          expect(actual).to eq({ fruits:[{id: 0, name: 'りんご'}, {id: 1, name: 'なし'}] })
        end
      end
    end
  end
end