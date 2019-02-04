require 'rails_helper'

feature "User visits home page", js: true do 
  scenario "succesfully" do
    visit homepage 
   
    expect(page).to have_css "a", text: "React"
  end

  def homepage
    "http://localhost:3000"
  end
end
