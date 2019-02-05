require 'rails_helper'

feature "User visits home page", js: true do 
  scenario "succesfully" do
    visit homepage 
   
    expect(page).to have_css "h1", text: "Reddit Clone"
  end

  def homepage
    "http://localhost:3000"
  end
end
