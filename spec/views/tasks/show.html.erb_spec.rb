require 'rails_helper'

RSpec.xdescribe "tasks/show", type: :view do
  before(:each) do
    @task = assign(:task, Task.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
