# OpenapiClient::ArrayInQueryParamsApi

All URIs are relative to *http://localhost:7100*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**fetch_array_in_query_params_fruits**](ArrayInQueryParamsApi.md#fetch_array_in_query_params_fruits) | **GET** /api/array_in_query_params/fruits | Arrayをクエリ文字列に入れてリクエストするAPI  |


## fetch_array_in_query_params_fruits

> <FruitsResponse> fetch_array_in_query_params_fruits(opts)

Arrayをクエリ文字列に入れてリクエストするAPI 

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::ArrayInQueryParamsApi.new
opts = {
  names: ['inner_example'] # Array<String> | 果物の名前のリスト 
}

begin
  # Arrayをクエリ文字列に入れてリクエストするAPI 
  result = api_instance.fetch_array_in_query_params_fruits(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ArrayInQueryParamsApi->fetch_array_in_query_params_fruits: #{e}"
end
```

#### Using the fetch_array_in_query_params_fruits_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FruitsResponse>, Integer, Hash)> fetch_array_in_query_params_fruits_with_http_info(opts)

```ruby
begin
  # Arrayをクエリ文字列に入れてリクエストするAPI 
  data, status_code, headers = api_instance.fetch_array_in_query_params_fruits_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FruitsResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ArrayInQueryParamsApi->fetch_array_in_query_params_fruits_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **names** | [**Array&lt;String&gt;**](String.md) | 果物の名前のリスト  | [optional] |

### Return type

[**FruitsResponse**](FruitsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

