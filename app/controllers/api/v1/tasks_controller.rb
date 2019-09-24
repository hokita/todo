# frozen_string_literal: true

module Api
  module V1
    # todoのリストを操作するコントローラー
    class TasksController < ApplicationController
      def index
        render json: { hoge: 'hoge' }
      end
    end
  end
end
