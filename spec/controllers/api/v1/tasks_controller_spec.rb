# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::TasksController do
  describe '#index' do
    let!(:task) { create_list(:task, 2) }

    it 'return tacks' do
      get :index
      target = task.to_json
      expect(response.body).to eq target
    end
  end

  describe '#create' do
    context 'if save succeed' do
      it 'create task' do
        params = { task: { content: 'test' } }
        post :create, params: params
        expect(response.body).to eq Task.first.to_json
      end
    end

    context 'if error occur' do
      before do
        allow(Task).to receive_message_chain(:new, :save)
          .and_return(false)
      end

      it 'return error messge' do
        params = { task: { content: 'test_content' } }
        post :create, params: params
        target = { error: 'Failed to creation.' }.to_json
        expect(response.body).to eq target
      end
    end
  end
end
