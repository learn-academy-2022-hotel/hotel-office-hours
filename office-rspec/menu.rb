require 'date'

class Menu < Food
  attr_accessor :category, :list, :cooked, :not_cooked, :today, :due_date

  def initialize (title)
    super(title)
    @list = []
    @cooked = []
    @not_cooked = []
    @today = []
    @due_date = []
  end

  def add_food food
    if food.due == Date.today.strftime('%m/%d/%Y') && food.status == 'in progress'
      @list << food
      @not_cooked << food
      @today << food
      @due_date << food
    elsif food.status == 'done'
      @list << food
      @cooked << food
      @due_date << food
    else
      @list << food
      @not_cooked << food
      @due_date << food
    end
  end

end
