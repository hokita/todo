# frozen_string_literal: true

Rails.application.routes.draw do
  root 'tasks#index'

  namespace :api, format: 'json' do
    namespace :v1 do
      resources :tasks, only: %i[index create]
    end
  end
end
