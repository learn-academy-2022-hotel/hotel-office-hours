require 'date'

class Food
  attr_accessor :title, :description, :status, :due

  def initialize(title, status='in progress')
    @title = title
    @description = 'please update description'
    @status = status
    @due = Date.today.strftime('%m/%d/%Y')
  end

  def describe recipe
    @description = recipe
  end

  def done
    @status = 'done'
  end

  def new_date day
    @due = day
  end

end