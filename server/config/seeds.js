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
