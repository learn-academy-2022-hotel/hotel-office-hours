require 'rspec'
require_relative 'food'
require_relative 'menu'

describe Food do
  it 'has to be real' do
    expect{ Food.new('Biscuit') }.to_not raise_error
  end
  it 'has to have a title' do
    biscuit = Food.new('Biscuit')
    expect(biscuit.title).to be_a(String)
    expect(biscuit.title).to eq('Biscuit')
  end
  it 'has a description that defaults to a message' do
    biscuit = Food.new('Biscuit')
    expect(biscuit.description).to eq('please update description')
    biscuit.describe 'buttermilk, flour, egg, butter'
    expect(biscuit.description).to eq('buttermilk, flour, egg, butter')
  end
  it 'has to have a default status of in progress' do
    biscuit = Food.new('Biscuit')
    # p "biscuit:", biscuit
    expect(biscuit.status).to be_a(String)
    expect(biscuit.status).to eq('in progress')
  end
  it 'can show a done status' do
    biscuit = Food.new('Biscuit')
    # p "biscuit:", biscuit
    expect{ biscuit.done }.to change{ biscuit.status }.from('in progress').to('done')
  end
  it 'has a due date' do
    biscuit = Food.new('Biscuit')
    # p biscuit
    expect(biscuit.due).to eq('01/16/2023')
  end
  it 'can change the due date' do
    biscuit = Food.new('Biscuit')
    expect{ biscuit.new_date '01/18/2023' }.to change { biscuit.due }.from('01/16/2023').to('01/18/2023')
  end
end

describe 'Menu' do
  it 'has to be real' do
    expect { Menu.new('')}.to_not raise_error
  end
  it 'has a list of all the food items' do
    pastry = Menu.new('Pastry')
    biscuit = Food.new('Biscuit')
    cake = Food.new('Lemon Raspberry Cake')
    expect { pastry.add_food biscuit }.to change { pastry.list }.from([]).to([biscuit])
    expect { pastry.add_food cake }.to change { pastry.list }.from([biscuit]).to([biscuit, cake])
    # p pastry
  end
  it 'can print out the cooked and not cooked food items' do
    pastry = Menu.new('Pastry')
    biscuit = Food.new('Biscuit')
    cake = Food.new('Lemon Raspberry Cake')
    cake.done
    pastry.add_food biscuit
    pastry.add_food cake
    expect(pastry.cooked).to eq([cake])
    expect(pastry.not_cooked).to eq([biscuit])
  end
  it 'shows cooked or uncooked list based on due date' do
    pastry = Menu.new('Pastry')
    biscuit = Food.new('Biscuit')
    cake = Food.new('Lemon Raspberry Cake')
    cake.done
    donut = Food.new('Chocolate Glazed Donut')
    biscuit.new_date '01/18/2023'
    pastry.add_food biscuit
    pastry.add_food cake
    pastry.add_food donut
    expect(pastry.today).to eq([donut])
    expect { pastry.arrange pastry.not_cooked }.to change { pastry.not_cooked }.from([biscuit, donut]).to([donut, biscuit])
  end

end