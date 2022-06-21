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

a = Card.create(description: "Test photo 1", year: 1999)
a.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/avatar_8a252a2aca4e_512.jpeg'), filename: 'file.jpg')
a.update(image_url: a.test_url)
puts 'a updated'
b = Card.create(description: "Test photo 2", year: 1999)
b.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/sub-buzz-1868-1518817287-6.jpeg'), filename: 'file.jpg')
b.update(image_url: b.test_url)

c = Card.create(description: "Test photo 3", year: 1999)
c.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/tumblr_p3t7dcw47X1x358nko1_1280.png'), filename: 'file.jpg')
c.update(image_url: c.test_url)

d = Card.create(description: "Test photo 4", year: 1999)
d.card_image.attach(io: File.open('/Users/aa/Downloads/Project Imgs/15337378_1827440934160957_968690740300293235_n.png'), filename: 'file.jpg')
d.update(image_url: d.test_url)



AlbumCard.create(album_id: 1, card_id: 1)
AlbumCard.create(album_id: 1, card_id: 2)
AlbumCard.create(album_id: 1, card_id: 3)
AlbumCard.create(album_id: 1, card_id: 4)

Tag.create(name: "Paul")
Tag.create(name: "Carrie")
Tag.create(name: "Kate")

CardTag.create(tag_id: 1, card_id: 1)
CardTag.create(tag_id: 2, card_id: 1)
CardTag.create(tag_id: 3, card_id: 1)