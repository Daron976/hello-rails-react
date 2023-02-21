class Message < ApplicationRecord
  validates :msg, presence: true
end
