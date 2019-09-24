# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::TasksController do
  describe '#index' do
    it do
      get :index
      target = { hoge: 'hoge' }.to_json
      expect(response.body).to eq target
    end
  end
end
