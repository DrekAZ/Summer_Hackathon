json.extract! todo_list, :id, :title, :content, :limit, :created_at, :updated_at
json.url todo_list_url(todo_list, format: :json)
