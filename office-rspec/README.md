User Stories
- make the test in food_spec.rb
- see good failure
- make the test passed in food.rb
- see a successful pass
- refactor
https://github.com/learn-academy-2022-hotel/Syllabus/blob/main/ruby/rspec.md


As a developer, I can create a Task.
```ruby
# Create test
  # initially when creating the test file, do the imports
  require 'rspec'
  require_relative 'food'
  # create the test
  describe Food do
    it 'has to be real' do
      expect{ Food.new }.to_not raise_error
    end
  end
# Create class
  class Food
  end
```

As a developer, I can give a Task a title and retrieve it.
 - need to give access to the properties
 - need an initialize method

ICEBOX - a different method to use Ruby Date class

As a developer, I can give a Task a description and retrieve it.
- create a description attribute with a default message
- create a method that will update the description

As a developer, I can mark a Task done. Tasks should be initialized as 'in progress'.
  - default status can be added to the parameter, 

As a developer, when I print a Task that is done, its status is shown.
 - add a method to change the status

As a developer, I can give a Task a due date. Hint: Use the built-in Ruby Date class.
 - https://www.rubyguides.com/2015/12/ruby-time/
 - To use the Date class you need to require 'date'.
  - You can get the current date using Date.today.
  - strptime() function can change format
  - created a default value to give current day as due date
  - method to change due date

🏔 Stretch Goals
As a developer, I can add all of my Tasks to a TaskList.
  - creating a Menu class that inherits from food class
  - import onto spec file
  - adding a category attribute to give each list distinction
  - need an empty array to accept the items
  - a method to push the different values(foods) into that array

As a developer with a TaskList, I can print the completed items.
  - add a cooked attribute to the Menu class
  - modify the add_food method with a condition to check a done status and push it to a complete array

As a developer with a TaskList, I can print the incomplete items.
  - add a not_cooked attribute to the Menu class
  - modify the add_food method with a condition to check a done status and push it to a complete array

As a developer with a TaskList, I can list all the not completed items that are due today.
- import date
- create a today attribute
- modify the add_food method with a condition to check a done status and date then push it to today array

As a developer with a TaskList, I can list all the incomplete items in order of due date.
- still in progress

As a developer with a TaskList with and without due dates, I can list all the not completed items in order of due date, and then the items without due dates.