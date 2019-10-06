# frozen_string_literal: true

# タスクモデル
class Task < ApplicationRecord
  validates :content, presence: true
  validates :status, presence: true

  state_machine :status, initial: :in_progress do
    state :in_progress, value: 0
    state :done, value: 1

    event :switch_status do
      transition in_progress: :done
    end
  end
end
