# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { 'test content' }
    status { 0 }
  end
end
