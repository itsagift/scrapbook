# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "usertest", password: "123", name: "User Test")

# Album.create(description: "A fake album", title: "Fake", user_id: 1)
# Album.create(description: "A fake album 2", title: "Fake 2", user_id: 1)
# Album.create(description: "A fake album 3", title: "Fake 3", user_id: 1)
# Album.create(description: "A fake album 4", title: "Fake 2", user_id: 1)

a = Card.create(description: "Paul, Ken, Pete, and Harry in the elevator.", year: 1960)
a.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s1.jpeg'), filename: 'file.jpeg')
a.update(image_url: a.test_url)
puts 'a updated'
b = Card.create(description: "A photo of Don, Sally, Betty, and Bobby", year: 1960)
b.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s1.png'), filename: 'file.png')
b.update(image_url: b.test_url)

c = Card.create(description: "Betty and Don at a Memorial Day brunch", year: 1962)
c.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s2-3.jpeg'), filename: 'file.jpeg')
c.update(image_url: c.test_url)

d = Card.create(description: "Betty and Glen on the couch", year: 1962)
d.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s2.jpeg'), filename: 'file.jpeg')
d.update(image_url: d.test_url)

e = Card.create(description: "Don and Anna on a sofa", year: 1953)
e.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/1953.png'), filename: 'file.png')
e.update(image_url: e.test_url)

f = Card.create(description: "Don, Betty, and Sally on a picnic", year: 1962)
f.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s2-4.png'), filename: 'file.png')
f.update(image_url: f.test_url)

g = Card.create(description: "Don and Sally eating breakfast", year: 1963)
g.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s3.jpg'), filename: 'file.jpg')
g.update(image_url: g.test_url)

h = Card.create(description: "Joan and Roger at dinner", year: 1965)
h.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s4-2.jpg'), filename: 'file.jpg')
h.update(image_url: h.test_url)

i = Card.create(description: "Pete and Trudy at a party", year: 1966)
i.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s5.png'), filename: 'file.png')
i.update(image_url: i.test_url)

j = Card.create(description: "Don and Betty staring at a map", year: 1968)
j.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s6.jpeg'), filename: 'file.jpeg')
j.update(image_url: j.test_url)

k = Card.create(description: "Megan in a floral dress", year: 1968)
k.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s6-2.jpg'), filename: 'file.jpg')
k.update(image_url: k.test_url)

l = Card.create(description: "Pete and a woman", year: 1969)
l.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s7.jpeg'), filename: 'file.jpeg')
l.update(image_url: l.test_url)

m = Card.create(description: "Peggy on the sofa", year: 1969)
m.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s7a.jpeg'), filename: 'file.jpeg')
m.update(image_url: m.test_url)

o = Card.create(description: "Don and Roger on the plane", year: 1970)
o.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s7b-3.jpeg'), filename: 'file.jpeg')
o.update(image_url: o.test_url)

n = Card.create(description: "Peggy carrying a box", year: 1970)
n.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/s7b.jpg'), filename: 'file.jpeg')
n.update(image_url: n.test_url)

# Person.create(name: "Paul")
# Tag.create(name: "Pete")
# Tag.create(name: "Peggy")
# Tag.create(name: "Don")
# Tag.create(name: "Betty")
# Tag.create(name: "Joan")
# Tag.create(name: "Roger")
# Tag.create(name: "Sally")
# Tag.create(name: "Megan")
# Tag.create(name: "Anna")
# Tag.create(name: "Bobby")
# Tag.create(name: "Glenn")
# Tag.create(name: "Ken")
# Tag.create(name: "Harry")
# Tag.create(name: "Trudy")