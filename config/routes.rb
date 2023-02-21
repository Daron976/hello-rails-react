Rails.application.routes.draw do
  # get 'messages/index'
  get 'root/index'
  get 'messages-api_v1', action: :index, controller: 'messages'
  get 'messages-api_v1/random', action: :show, controller: 'messages'
  # namespace :api do
  #   namespace :v1 do
  #   end
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
end
