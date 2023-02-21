class MessagesController < ApplicationController
  def index
    @messages = Message.all

    render json: @messages
  end

  def show
    random = rand(1..5)
    @msg = Message.find(random)

    render json: @msg
  end
end
