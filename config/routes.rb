Rails.application.routes.draw do
  # get 'messages/index'
  get 'root/index'
  get 'messages', action: :index, controller: 'messages'
  get 'messages/random', action: :show, controller: 'messages'
  # namespace :api do
  #   namespace :v1 do
  #   end
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
end
