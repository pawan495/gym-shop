const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Weight' },
    { name: 'Benches' },
    { name: 'Machines' },
    { name: 'Supplements' },
    { name: 'Misc' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '5lb dumbbell',
      description:
        'Tru Grit - 5-lb Hex Elite Dumbbell Single.',
      image: '5lb-dumbbell.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 100
    },
    {
      name: '20lb dumbbel',
      description:
        'Tru Grit - 20-lb Hex Rubber Coated Dumbbell Single.',
      image: '20lb-dumbbell.jpg',
      category: categories[0]._id,
      price: 18.99,
      quantity: 500
    },
    {
      name: '30lb dumbbel',
      category: categories[0]._id,
      description:
        'Tru Grit - 30-lb Hex Elite Dumbbell Single.',
        image: '30lb-dumbbell.jpg',
        category: categories[0]._id,
      price: 27.99,
      quantity: 200
    },

    {
      name: 'Bowflex Select Adjustable dumbbel',
      category: categories[0]._id,
      description:
        'Automatically change your resistance from 5 lbs (2.27 kg) up to 52.5 lbs (23.8 kg) in 2.5 lb. increments up to 25 lb',
        image: 'adjustabledumbell.webp',
        category: categories[0]._id,
      price: 249.99,
      quantity: 200
    },

    {
      name: 'Cap Barbell rubber hex dumbbell set',
      category: categories[0]._id,
      description:
        'Set includes a pair of 5 lb, 10 lb, 15 lb, 20 lb, and 25 lb (2.2, 4.5, 6.8, 9. and 11.3 kg) 12-sided rubber hex dumbbells with an A-frame dumbbell rack to store the weights',
        image: 'dumbellset.webp',
        category: categories[0]._id,
      price: 599.99,
      quantity: 200
    },

    {
      name: 'CAP Spinlock Dumbbell Weights',
      category: categories[0]._id,
      description:
        'CAP Spinlock Dumbbell Weights are a great addition for any weight outfit Two 15" (38.1 cm) chrome spinlock dumbbell bars',
        image: 'spinlock.webp',
        category: categories[0]._id,
      price: 89.99,
      quantity: 200
    },
    {
      name: 'Cast Iron Weight Plate',
      category: categories[0]._id,
      description:
        'Cast Iron Weight Plate features a cast iron construction that will provide a lifetime of use',
        image: 'iron1.jpeg',
        category: categories[0]._id,
      price: 12.99,
      quantity: 200
    },

    {
      name: 'CAP Olympic Plate 25-lb Weights Set, 2-pc',
      category: categories[0]._id,
      description:
        'CAP Olympic Plate 25-lb Weights Set will help strengthen your upper body and is convenient to use in the comfort of your own home',
        image: 'iron2.webp',
        category: categories[0]._id,
      price: 25.99,
      quantity: 200
    },

    {
      name: 'Cap Barbell 12-Sided Olympic Rubber Coated Plate Set',
      category: categories[0]._id,
      description:
        'Cap Barbell 12-Sided Olympic Rubber Coated Plate will protect your floors from damage',
        image: 'iron3.webp',
        category: categories[0]._id,
      price: 24.99,
      quantity: 200
    },

    {
      name: 'Olympic Weights Set, 110-lb, 7-pc',
      category: categories[0]._id,
      description:
        'Olympic Weights Set is ideal for developing upper body strength. Durable cast iron construction .Dimensions: 84 L x 11 W x 11" H (213 x 28 x 28 cm)Total weight: 110 lb (49.89 kg)',
        image: 'iron4.webp',
        category: categories[0]._id,
      price: 249.99,
      quantity: 200
    },

    {
      name: 'Cap Barbell Olympic Bar, 7-ft',
      category: categories[0]._id,
      description:
        'Cap Olympic Bar is great for powerlifting and Olympic lifting',
        image: 'iron5.webp',
        category: categories[0]._id,
      price: 249.99,
      quantity: 200
    },


    {
      name: ' Carbon Strength Flat Bench',
      category: categories[1]._id,
      description:
        'A new take on a classic piece of equipment, the rolling flat bench from ProForm offers heavy-duty support through your most intense weightlifting routines.',
      image: 'bench4.jpg',
      price: 99.99,
      quantity: 10
    },
    {
      name: 'ProForm - Carbon Strength Adjustable Bench',
      category: categories[1]._id,
      description:
        'ProForm’s Carbon Strength Adjustable Bench delivers versatile support for your at-home strength training routine. A reinforced frame has been tested to bear a total of up to 610 Lbs., and can easily adjust between decline, flat, incline, and military positions.',
      image: 'bench1.jpg',
      price: 199.99,
      quantity: 50
    },
    {
      name: 'Sport Olympic Rack and Bench XT ',
      category: categories[1]._id,
      description:
        'Offering multiple workout stations in a single, compact design, the ProForm Sport XT Olympic Squat Rack and Bench provide the versatility you need to build comprehensive strength in the comfort of your own living room. Adjustable uprights are designed to be compatible with seven-foot Olympic-sized barbells (not included) and can be modified to fit your frame and lifting style.',
      image: 'bench2.jpg',
      price: 299.99,
      quantity: 5
    },
    {
      name: ' PR3000 Home Gym ',
      category: categories[1]._id,
      description:
        'The Bowflex PR3000 is a total-body home gym with more than 50 strength exercises and no cable changes needed between sets using the Quick Change Power Rod system.',
      image: 'bench3.jpg',
      price: 999.99,
      quantity: 10
    },
    {
      name: 'ProForm 325 CSX Bike ',
      category: categories[2]._id,
      description:
        ' Get the competitive edge on the ProForm 325 CSX Recumbent Bike. With iFIT technology, you can ride around the globe and follow along with elite personal trainers. ',
      image: 'machine1.jpg',
      price: 399.99,
      quantity: 25
    },
    {
      name: ' S22i Studio Cycle with UPGRADED 22” HD Touchscreen',
      category: categories[2]._id,
      description:
        'Bring an unmatched, interactive personal training experience home with the NordicTrack Commercial S22i Studio Cycle.',
      image: 'machine2.jpg',
      price: 1499.99,
      quantity: 3
    },
    {
      name: ' Carbon T10 Treadmill',
      category: categories[2]._id,
      description:
        ' Bring interactive personal training into your living room with the ProForm Carbon T10 smart treadmill.',
      image: 'machine3.jpg',
      price: 999.99,
      quantity: 6
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
