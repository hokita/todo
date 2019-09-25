# frozen_string_literal: true

module Api
  module V1
    # todoのリストを操作するコントローラー
    class TasksController < ApplicationController
      def index
        render json: { hoge: 'hoge' },
               status: :ok
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: { hoge: 'hoge' },
                 status: :created
        else
          render json: { error: 'Failed to creation.' },
                 status: :unprocessable_entity
        end
      end

      private

      def task_params
        params.fetch(:task, {})
      end
    end
  end
end
