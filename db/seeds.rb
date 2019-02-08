# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
users = User.create([{username: "Bob75" ,password: "password" }, {username: "JoeRock100" ,password: "password"},{username: "Samarmy23" ,password: "password"}])

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dui consequat tristique venenatis. Proin rutrum, nunc non tristique maximus, leo urna dignissim nunc, sed tincidunt ipsum lorem non nisl. Nullam lacus ipsum, aliquam quis dignissim ac, vestibulum eget diam. In gravida maximus risus tincidunt dapibus. Suspendisse mattis malesuada lorem nec imperdiet. Duis tincidunt neque non risus efficitur vestibulum. Proin eleifend egestas neque, eu tristique turpis pellentesque et. Curabitur consequat nisi a purus rhoncus fringilla. Ut a ligula tristique, molestie velit non, dapibus neque. In congue elementum lacus, ac interdum risus volutpat at.

Vestibulum ut condimentum purus. Ut vel nunc in ligula sollicitudin porttitor sit amet quis lorem. Quisque vehicula vulputate semper. Quisque elementum turpis a sagittis iaculis. Ut mi nibh, convallis non lobortis eleifend, consectetur quis lectus. Donec non consectetur ipsum. Duis vestibulum ante ut urna suscipit, in tristique arcu suscipit. Sed pretium fringilla nulla. In convallis vestibulum laoreet. Nunc id purus vitae quam ultrices feugiat.

Ut non efficitur velit. Ut eu dapibus elit. Integer imperdiet hendrerit malesuada. Suspendisse rhoncus risus et tincidunt tincidunt. Nulla fermentum ligula nec erat porta egestas. Vestibulum at velit dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eu justo suscipit, facilisis massa a, laoreet turpis. Maecenas commodo a leo eu aliquam. Nunc lacinia dui libero, non vestibulum sapien imperdiet in. Cras faucibus mauris risus, in vulputate felis consequat sit amet. Nam dictum sollicitudin orci in accumsan. Sed quis eros sed purus maximus pellentesque at eget arcu."

users.first.posts.create([{title: "Cute Dog", text: text, category: "animals"},{title: "That movie sucks.", text: text, category: "movies"},{title: "Best Joke Ever", text: text, category: "funny"}])

users.last.posts.create([{title: "Earthquake Just Happened", text: text, category: "news"},{title: "White House Info", text: text, category: "politics"}])

users[1].posts.create([{title: "What makes a salad a salad?", text: text, category: "ask"}])
