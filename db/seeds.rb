user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')



apartments = [
    {
        street: "Dreamery Drive",
        city: "San Diego",
        state: "California",
        manager: "LJ",
        email: "test@example.com",
        price: "$3500.00",
        bedrooms: 2,
        bathrooms: 2,
        pets: "cats only",
        image: "https://images1.forrent.com/i2/tb-tHmpjytjE7Kxrc1HHnqm26BNSFIVF5rwMKFAGatA/117/image.jpg",
    },
    {
        street: "Dreamery Drive",
        city: "San Diego",
        state: "California",
        manager: "LJ",
        email: "test@example.com",
        price: "$3500.00",
        bedrooms: 2,
        bathrooms: 2,
        pets: "cats only",
        image: "http://",
    },
    {
        street: "Dreamery Drive",
        city: "San Diego",
        state: "California",
        manager: "LJ",
        email: "test@example.com",
        price: "$3500.00",
        bedrooms: 2,
        bathrooms: 2,
        pets: "cats only",
        image: "http://",
    }
]

apartments.each do |each_apartment|
    user.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end