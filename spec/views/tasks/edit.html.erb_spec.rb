# frozen_string_literal: true

require 'rails_helper'

RSpec.xdescribe 'tasks/edit', type: :view do
  before(:each) do
    @task = assign(:task, Task.create!)
  end

  it 'renders the edit task form' do
    render

    assert_select 'form[action=?][method=?]', task_path(@task), 'post' do
    end
  end
end
