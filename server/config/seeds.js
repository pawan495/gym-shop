const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Weight' },
    { name: 'Benches' },
    { name: 'Machines' },
    { name: 'Supplements' },
    { name: 'Misc' },
    {name: 'Full Smith'}
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
      name: ' Powertec Workbench Leg Press Accessory (WB-LPA19)      ',
      category: categories[1]._id,
      description:
        'It is named the smallest leg press option in the market. New for 2019 - angled stainless steel weight horns. ',
      image: 'bench5.jpg',
      price: 399.99,
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
      name: 'Healthrider Under Desk Foot Pedal Exerciser ',
      category: categories[2]._id,
      description:
        'Healthrider Under Desk Foot Pedal Exerciser is ideal for a low-impact, fat-burning workout',
      image: 'machine4.webp',
      price: 129.99,
      quantity: 100
    },

    {
      name: 'Commercial S22i Studio Cycle ',
      category: categories[2]._id,
      description: 'The NordicTrack Commercial S22i Studio Cycle brings the cycling studio to your home with this interactive model designed to mimic having a personal cycling coach in your home',
      image: 'machine5.jpg',
      price: 1429.99,
      quantity: 100
    },
  
    {
      name: 'Air Runner ',
      category: categories[2]._id,
      description:
        'Stepping onto the treadmill to log another mindless 30-minute jog might sound like the most unappealing way to spend a workout — so donot waste your time',
      image: 'machine6.jpeg',
      price: 1329.99,
      quantity: 100
    },

    {
      name: 'Assault Airbike ',
      category: categories[2]._id,
      description:
        'The Assault AirBike might look like it belongs in a dust-filled corner of your high school weight room, but it deserves respect. No one climbs off of one of these thinking, That was easy says De Wispelaere, who has seen a few clients almost heave after an Assault AirBike workout.',
      image: 'machine7.jpg',
      price: 929.99,
      quantity: 100
    },

    {
      name: 'Smart Rower ',
      category: categories[2]._id,
      description:
        'This Echelon rower is super ergonomic. Not only does it fold upright for convenient storage, its device holder swivels 90° and flips 180°, and the resistance controls are located on handlebars for easy adjusting. Plus, it has 32 levels of magnetic resistance for a customized workout. If you prefer, you can also subscribe to the Echelon Fit membership to get access to on-demand and live classes.',
      image: 'machine8.jpg',
      price: 829.99,
      quantity: 100
    },

    {
      name: 'Jacobs Ladder Step Machine',
      category: categories[2]._id,
      description:
        'Climbing a ladder isnot so bad. But what if that ladder kept going up and up and up? Suddenly, that ascent becomes a monstrous workout. That is the idea behind Jacobs Ladder, a self-paced machine that requires you to climb endlessly upward.',
      image: 'machine9.jpg',
      price: 3989.99,
      quantity: 100
    },

    {
      name: 'Gatorade Perform Sports Drink Variety Pack, 591-mL, 24-pk',
      category: categories[3]._id,
      description: 'Gatorade Perform Sports Drink Variety Pack features a unique blend of carbohydrates and electrolytes to ensure you stay hydrated when active',
      image: 'supp1.webp',
      price: 21.99,
      quantity: 1000
    },
    {
      name: 'C4 Ripped Sport Pre-Workout Powder, Arctic Snow, 246-g',
      category: categories[3]._id,
      description:
        'C4 Ripped Sport Pre-Workout Powder utilizes a revolutionary fat-loss formula to help shred up your physique to meet your fitness goals',
      image: 'supp2.webp',
      price: 20.99,
      quantity: 1000
    },
    {
      name: 'Xtend Pro Whey Protein Isolate with BCAAs, Chocolate Cake, 825-g',
      category: categories[3]._id,
      description:
        'Xtend Pro Whey Protein Isolate with BCAAs provides a ultra-pure source of protein that helps maintain lean muscle',
      image: 'supp3.webp',
      price: 37.99,
      quantity: 100
    },
    {
      name: 'Xtend Hydrasport BCAA Powder, Strawberry Kiwi, 348-g',
      category: categories[3]._id,
      description:
        'Xtend Hydrasport BCAA Powder offers a sugar-free post workout muscle recovery drink with amino acids',
      image: 'supp4.webp',
      price: 29.99,
      quantity: 600
    },

    {
      name: 'LOOP BAND (Resistance band)',
      category: categories[4]._id,
      description:
        'use for lateral steps, leg extensions,shoulder stabilization exercises and much more!',
      image: 'misc1.jpg',
      price: 4.99,
      quantity: 200
    },

    {
      name: 'XM Pro Slam ball (4-50 lbs)',
      category: categories[4]._id,
      description:
        'The Xtreme Pro Slam Ball is a great conditioning tool for all fitness levels that works the entire body with explosive, functional training movements.',
      image: 'misc2.jpg',
      price: 14.99,
      quantity: 100
    }, 

    {
      name: 'Vice Versus Jump Rope',
      category: categories[4]._id,
      description:
        'One of the smoothest PVC Jump Rope.',
      image: 'misc3.jpg',
      price: 5.99,
      quantity: 100
    }, 

    {
      name: 'Marcy Combo Smith Machine',
      category: categories[5]._id,
      description:
        'This Smith machine kind of does it all. Not only does it have steel aircraft cables that are rated at 2,000 pound tensile strength, but it also has a dual function leg developer with a pivot point that aligns with knee joints.',
      image: 'full1.jpg',
      price: 729.99,
      quantity: 20
    },

    {
      name: 'Force USA G3 All-In-One Trainer',
      category: categories[5]._id,
      description:
        'This Smith machine kind of does it all. Not only does it have steel aircraft cables that are rated at 2,000 pound tensile strength, but it also has a dual function leg developer with a pivot point that aligns with knee joints.',
      image: 'full2.jpg',
      price: 2729.99,
      quantity: 5
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
