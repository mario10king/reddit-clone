require 'rails_helper'

feature "User creates post", js: true do 
  scenario "succesfully" do
    visit homepage 
    fill_in "body", with: "Greatest Post Ever"
    find('input[type="Submit"]').click
    visit homepage 
   
    expect(page).to have_css "div", text: "Greatest Post Ever"
  end

  def homepage
    "http://localhost:3000"
  end
end
