require 'rails_helper'

RSpec.xdescribe "tasks/index", type: :view do
  before(:each) do
    assign(:tasks, [
      Task.create!(),
      Task.create!()
    ])
  end

  it "renders a list of tasks" do
    render
  end
end
