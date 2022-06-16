# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "usertest", password: "123", name: "User Test")

Album.create(description: "A fake album", title: "Fake", user_id: 1)
Album.create(description: "A fake album 2", title: "Fake 2", user_id: 1)
Album.create(description: "A fake album 3", title: "Fake 3", user_id: 1)
Album.create(description: "A fake album 4", title: "Fake 2", user_id: 1)

Card.create(description: "Test photo 1", year: 1999)
Card.create(description: "Test photo 2", year: 1999)
Card.create(description: "Test photo 3", year: 1999)
Card.create(description: "Test photo 4", year: 1999)

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