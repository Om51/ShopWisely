import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Dummy product data (replace this with your actual data retrieval logic)
const getProductById = (id) => {
  // Dummy data for demonstration
  const products = {
    
    101: {
      id: 101,
      name: 'Butter Chicken',
      zomato: { price: 876, rating: 4.5, review: 'Delicious', image: '/Images/D101.jpg' },
      swiggy: { price: 897, rating: 4.6, review: 'Amazing!', image: '/Images/D101.jpg' }
    },
    102: {
      id: 102,
      name: 'Chicken Tikka Masala',
      zomato: { price: 409, rating: 4.4, review: 'Spicy and flavorful', image: '/Images/D102.jpg' },
      swiggy: { price: 427, rating: 4.5, review: 'Absolutely delicious', image: '/Images/D102.jpg' }
    },
    103: {
      id: 103,
      name: 'Tandoori Chicken',
      zomato: { price: 522, rating: 4.6, review: 'Smoky and tender', image: '/Images/D103.jpg' },
      swiggy: { price: 550, rating: 4.7, review: 'Perfectly cooked', image: '/Images/D103.jpg' }
    },
    104: {
      id: 104,
      name: 'Rogan Josh',
      zomato: { price: 709, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D104.jpg' },
      swiggy: { price: 677, rating: 4.6, review: 'Perfectly balanced flavors', image: '/Images/D104.jpg' }
    },
    105: {
      id: 105,
      name: 'Chicken Biryani',
      zomato: { price: 312, rating: 4.7, review: 'Aromatic and flavorful', image: '/Images/D105.jpg' },
      swiggy: { price: 352, rating: 4.8, review: 'Absolutely delicious', image: '/Images/D105.jpg' }
    },
    106: {
      id: 106,
      name: 'Mutton Biryani',
      zomato: { price: 899, rating: 4.8, review: 'Tender and flavorful', image: '/Images/D106.jpg' },
      swiggy: { price: 864, rating: 4.9, review: 'Authentic taste', image: '/Images/D106.jpg' }
    },
    107: {
      id: 107,
      name: 'Fish Curry',
      zomato: { price: 679, rating: 4.5, review: 'Flavorful and tangy', image: '/Images/D107.jpg' },
      swiggy: { price: 643, rating: 4.6, review: 'Perfectly cooked fish', image: '/Images/D107.jpg' }
    },
    108: {
      id: 108,
      name: 'Goan Prawn Curry',
      zomato: { price: 790, rating: 4.6, review: 'Rich and creamy', image: '/Images/D108.jpg' },
      swiggy: { price: 830, rating: 4.7, review: 'Authentic Goan flavors', image: '/Images/D108.jpg' }
    },
    109: {
      id: 109,
      name: 'Hyderabadi Dum Biryani',
      zomato: { price: 345, rating: 4.8, review: 'Spicy and aromatic', image: '/Images/D109.jpg' },
      swiggy: { price: 352, rating: 4.9, review: 'Royal treat!', image: '/Images/D109.jpg' }
    },
    110: {
      id: 110,
      name: 'Chicken Korma',
      zomato: { price: 489, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D110.jpg' },
      swiggy: { price: 523, rating: 4.4, review: 'Rich and satisfying', image: '/Images/D110.jpg' }
    },
    111: {
      id: 111,
      name: 'Chicken Curry',
      zomato: { price: 901, rating: 4.2, review: 'Homely and delicious', image: '/Images/D111.jpg' },
      swiggy: { price: 851, rating: 4.3, review: 'Classic comfort food', image: '/Images/D111.jpg' }
    },
    112: {
      id: 112,
      name: 'Lamb Korma',
      zomato: { price: 779, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D112.jpg' },
      swiggy: { price: 825, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D112.jpg' }
    },
    113: {
      id: 113,
      name: 'Keema Curry',
      zomato: { price: 666, rating: 4.3, review: 'Savory and satisfying', image: '/Images/D113.jpg' },
      swiggy: { price: 685, rating: 4.4, review: 'Comfort food at its best', image: '/Images/D113.jpg' }
    },
    114: {
      id: 114,
      name: 'Tandoori Fish Tikka',
      zomato: { price: 235, rating: 4.5, review: 'Smoky and flavorful', image: '/Images/D114.jpg' },
      swiggy: { price: 201, rating: 4.6, review: 'Perfect appetizer', image: '/Images/D114.jpg' }
    },
    115: {
      id: 115,
      name: 'Malabar Fish Curry',
      zomato: { price: 578, rating: 4.4, review: 'Coconutty and delicious', image: '/Images/D115.jpg' },
      swiggy: { price: 621, rating: 4.5, review: 'Authentic Malabar flavors', image: '/Images/D115.jpg' }
    },
    116: {
      id: 116,
      name: 'Chettinad Chicken Curry',
      zomato: { price: 432, rating: 4.6, review: 'Spicy and aromatic', image: '/Images/D116.jpg' },
      swiggy: { price: 461, rating: 4.7, review: 'Bold flavors', image: '/Images/D116.jpg' }
    },
    117: {
      id: 117,
      name: 'Chicken Chettinad',
      zomato: { price: 467, rating: 4.5, review: 'Rich and flavorful', image: '/Images/D117.jpg' },
      swiggy: { price: 445, rating: 4.6, review: 'Perfectly spiced', image: '/Images/D117.jpg' }
    },
    118: {
      id: 118,
      name: 'Kerala Fish Curry',
      zomato: { price: 789, rating: 4.4, review: 'Tangy and delicious', image: '/Images/D118.jpg' },
      swiggy: { price: 752, rating: 4.5, review: 'Traditional Kerala flavors', image: '/Images/D118.jpg' }
    },
    119: {
      id: 119,
      name: 'Fish Tandoori',
      zomato: { price: 679, rating: 4.6, review: 'Juicy and flavorful', image: '/Images/D119.jpg' },
      swiggy: { price: 650, rating: 4.7, review: 'Perfectly grilled', image: '/Images/D119.jpg' }
    },
    120: {
      id: 120,
      name: 'Mutton Rogan Josh',
      zomato: { price: 567, rating: 4.7, review: 'Rich and aromatic', image: '/Images/D120.jpg' },
      swiggy: { price: 611, rating: 4.8, review: 'Perfectly cooked lamb', image: '/Images/D120.jpg' }
    },
    121: {
      id: 121,
      name: 'Chicken 65',
      zomato: { price: 312, rating: 4.2, review: 'Crispy and flavorful', image: '/Images/D121.jpg' },
      swiggy: { price: 325, rating: 4.3, review: 'Perfect appetizer', image: '/Images/D121.jpg' }
    },
    122: {
      id: 122,
      name: 'Mutton Do Pyaza',
      zomato: { price: 789, rating: 4.4, review: 'Rich and flavorful', image: '/Images/D122.jpg' },
      swiggy: { price: 765, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D122.jpg' }
    },
    123: {
      id: 123,
      name: 'Hyderabadi Chicken Biryani',
      zomato: { price: 777, rating: 4.6, review: 'Spicy and aromatic', image: '/Images/D123.jpg' },
      swiggy: { price: 725, rating: 4.7, review: 'Authentic Hyderabadi flavors', image: '/Images/D123.jpg' }
    },
    124: {
      id: 124,
      name: 'Kerala Chicken Curry',
      zomato: { price: 765, rating: 4.3, review: 'Coconutty and delicious', image: '/Images/D124.jpg' },
      swiggy: { price: 789, rating: 4.4, review: 'Authentic Kerala flavors', image: '/Images/D124.jpg' }
    },
    125: {
      id: 125,
      name: 'Bengali Fish Curry',
      zomato: { price: 589, rating: 4.4, review: 'Tangy and flavorful', image: '/Images/D125.jpg' },
      swiggy: { price: 552, rating: 4.5, review: 'Authentic Bengali taste', image: '/Images/D125.jpg' }
    },
    126: {
      id: 126,
      name: 'Mutton Curry',
      zomato: { price: 435, rating: 4.5, review: 'Rich and flavorful', image: '/Images/D126.jpg' },
      swiggy: { price: 455, rating: 4.6, review: 'Perfectly cooked mutton', image: '/Images/D126.jpg' }
    },
    127: {
      id: 127,
      name: 'Chicken Reshmi Kebab',
      zomato: { price: 899, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D127.jpg' },
      swiggy: { price: 859, rating: 4.4, review: 'Melt-in-your-mouth goodness', image: '/Images/D127.jpg' }
    },
    128: {
      id: 128,
      name: 'Mutton Seekh Kebab',
      zomato: { price: 743, rating: 4.2, review: 'Juicy and flavorful', image: '/Images/D128.jpg' },
      swiggy: { price: 764, rating: 4.3, review: 'Perfectly spiced', image: '/Images/D128.jpg' }
    },
    129: {
      id: 129,
      name: 'Fish Curry',
      zomato: { price: 812, rating: 4.5, review: 'Flavorful and tangy', image: '/Images/D129.jpg' },
      swiggy: { price: 842, rating: 4.6, review: 'Perfectly cooked fish', image: '/Images/D129.jpg' }
    },
    130: {
      id: 130,
      name: 'Goan Prawn Curry',
      zomato: { price: 344, rating: 4.6, review: 'Rich and creamy', image: '/Images/D130.jpg' },
      swiggy: { price: 385, rating: 4.7, review: 'Authentic Goan flavors', image: '/Images/D130.jpg' }
    },
    131: {
      id: 131,
      name: 'Chicken Vindaloo',
      zomato: { price: 645, rating: 4.5, review: 'Spicy and tangy', image: '/Images/D131.jpg' },
      swiggy: { price: 635, rating: 4.6, review: 'Flavor explosion!', image: '/Images/D131.jpg' }
    },
    132: {
      id: 132,
      name: 'Goan Fish Curry',
      zomato: { price: 789, rating: 4.4, review: 'Tangy and aromatic', image: '/Images/D132.jpg' },
      swiggy: { price: 745, rating: 4.5, review: 'Perfectly balanced flavors', image: '/Images/D132.jpg' }
    },
    133: {
      id: 133,
      name: 'Chicken Kolhapuri',
      zomato: { price: 467, rating: 4.6, review: 'Spicy and flavorful', image: '/Images/D133.jpg' },
      swiggy: { price: 455, rating: 4.7, review: 'Authentic Kolhapuri taste', image: '/Images/D133.jpg' }
    },
    134: {
      id: 134,
      name: 'Mutton Kheema',
      zomato: { price: 900, rating: 4.4, review: 'Savory and delicious', image: '/Images/D134.jpg' },
      swiggy: { price: 920, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D134.jpg' }
    },
    135: {
      id: 135,
      name: 'Tawa Fish Fry',
      zomato: { price: 422, rating: 4.7, review: 'Crispy and flavorful', image: '/Images/D135.jpg' },
      swiggy: { price: 399, rating: 4.8, review: 'Perfectly cooked', image: '/Images/D135.jpg' }
    },
    136: {
      id: 136,
      name: 'Chicken Handi',
      zomato: { price: 533, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D136.jpg' },
      swiggy: { price: 512, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D136.jpg' }
    },
    137: {
      id: 137,
      name: 'Mutton Handi',
      zomato: { price: 267, rating: 4.5, review: 'Tender and succulent', image: '/Images/D137.jpg' },
      swiggy: { price: 299, rating: 4.6, review: 'Perfectly cooked mutton', image: '/Images/D137.jpg' }
    },
    138: {
      id: 138,
      name: 'Chicken Shahi Korma',
      zomato: { price: 579, rating: 4.4, review: 'Rich and creamy', image: '/Images/D138.jpg' },
      swiggy: { price: 545, rating: 4.5, review: 'Decadent flavors', image: '/Images/D138.jpg' }
    },
    139: {
      id: 139,
      name: 'Hyderabadi Mutton Biryani',
      zomato: { price: 678, rating: 4.8, review: 'Aromatic and flavorful', image: '/Images/D139.jpg' },
      swiggy: { price: 699, rating: 4.9, review: 'Exquisite taste', image: '/Images/D139.jpg' }
    },
    140: {
      id: 140,
      name: 'Chicken Tandoori',
      zomato: { price: 812, rating: 4.6, review: 'Juicy and smoky', image: '/Images/D140.jpg' },
      swiggy: { price: 851, rating: 4.7, review: 'Perfectly grilled', image: '/Images/D140.jpg' }
    },
    141: {
      id: 141,
      name: 'Chilli Chicken',
      zomato: { price: 456, rating: 4.3, review: 'Spicy and flavorful', image: '/Images/D141.jpg' },
      swiggy: { price: 422, rating: 4.4, review: 'Perfect appetizer', image: '/Images/D141.jpg' }
    },
    142: {
      id: 142,
      name: 'Fish Pakora',
      zomato: { price: 567, rating: 4.2, review: 'Crispy and delicious', image: '/Images/D142.jpg' },
      swiggy: { price: 599, rating: 4.3, review: 'Perfect snack', image: '/Images/D142.jpg' }
    },
    143: {
      id: 143,
      name: 'Chicken Hariyali Tikka',
      zomato: { price: 234, rating: 4.4, review: 'Herb-infused and juicy', image: '/Images/D143.jpg' },
      swiggy: { price: 249, rating: 4.5, review: 'Refreshing flavors', image: '/Images/D143.jpg' }
    },
    144: {
      id: 144,
      name: 'Chicken Malai Tikka',
      zomato: { price: 743, rating: 4.5, review: 'Creamy and succulent', image: '/Images/D144.jpg' },
      swiggy: { price: 720, rating: 4.6, review: 'Deliciously marinated', image: '/Images/D144.jpg' }
    },
    145: {
      id: 145,
      name: 'Mutton Kofta',
      zomato: { price: 779, rating: 4.3, review: 'Savory and flavorful', image: '/Images/D145.jpg' },
      swiggy: { price: 750, rating: 4.4, review: 'Perfectly spiced', image: '/Images/D145.jpg' }
    },
    146: {
      id: 146,
      name: 'Prawn Biryani',
      zomato: { price: 890, rating: 4.6, review: 'Aromatic and delicious', image: '/Images/D146.jpg' },
      swiggy: { price: 849, rating: 4.7, review: 'Tantalizing flavors', image: '/Images/D146.jpg' }
    },
    147: {
      id: 147,
      name: 'Mutton Biryani (Lucknowi)',
      zomato: { price: 555, rating: 4.7, review: 'Rich and flavorful', image: '/Images/D147.jpg' },
      swiggy: { price: 579, rating: 4.8, review: 'Exquisite taste', image: '/Images/D147.jpg' }
    },
    148: {
      id: 148,
      name: 'Amritsari Fish Tikka',
      zomato: { price: 333, rating: 4.5, review: 'Crispy and flavorful', image: '/Images/D148.jpg' },
      swiggy: { price: 351, rating: 4.6, review: 'Perfect appetizer', image: '/Images/D148.jpg' }
    },
    149: {
      id: 149,
      name: 'Bengali Mutton Curry (Kosha Mangsho)',
      zomato: { price: 444, rating: 4.6, review: 'Rich and aromatic', image: '/Images/D149.jpg' },
      swiggy: { price: 429, rating: 4.7, review: 'Perfectly spiced', image: '/Images/D149.jpg' }
    },
    150: {
      id: 150,
      name: 'Chicken Handi',
      zomato: { price: 533, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D150.jpg' },
      swiggy: { price: 519, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D150.jpg' }
    },
    151: {
      id: 151,
      name: 'Singapore Mei Fun',
      zomato: { price: 345, rating: 4.5, review: 'Good', image: '/Images/d151.jpeg' },
      swiggy: { price: 369, rating: 4.6, review: 'Very Good', image: '/Images/d151.jpeg' }
    },
    152: {
      id: 152,
      name: 'Scallion Pancakes with Dim Sum Dipper',
      zomato: { price: 672, rating: 4.2, review: 'Okay', image: '/Images/d152.jpeg' },
      swiggy: { price: 651, rating: 4.3, review: 'Good', image: '/Images/d152.jpeg' }
    },
    153: {
      id: 153,
      name: 'Takeout-style Air Fryer Egg Rolls',
      zomato: { price: 564, rating: 4.2, review: 'Okay', image: '/Images/d153.jpeg' },
      swiggy: { price: 599, rating: 4.3, review: 'Niceeee', image: '/Images/d153.jpeg' }
    },
    154: {
      id: 154,
      name: 'Char Siu',
      zomato: { price: 879, rating: 4.1, review: 'Nice', image: '/Images/d154.jpeg' },
      swiggy: { price: 849, rating: 3.9, review: 'Okay', image: '/Images/d154.jpeg' }
    },
    155: {
      id: 155,
      name: 'Char Siu Bao',
      zomato: { price: 498, rating: 4.2, review: 'Nice', image: '/Images/d155.jpeg' },
      swiggy: { price: 459, rating: 4.0, review: 'Good', image: '/Images/d155.jpeg' }
    },
    156: {
      id: 156,
      name: 'Pork Soup Dumplings',
      zomato: { price: 123, rating: 4.3, review: 'Good', image: '/Images/d156.jpeg' },
      swiggy: { price: 99, rating: 4.1, review: 'Nice', image: '/Images/d156.jpeg' }
    },
    157: {
      id: 157,
      name: 'Wontons in Chili Oil',
      zomato: { price: 267, rating: 4.2, review: 'Okay', image: '/Images/d157.jpeg' },
      swiggy: { price: 299, rating: 3.9, review: 'Okay', image: '/Images/d157.jpeg' }
    },
    158: {
      id: 158,
      name: 'Bo Zai Fan (Clay Pot Rice)',
      zomato: { price: 786, rating: 4.5, review: 'Good', image: '/Images/d158.jpeg' },
      swiggy: { price: 750, rating: 4.3, review: 'Nice', image: '/Images/d158.jpeg' }
    },
    159: {
      id: 159,
      name: 'Braised Eggplant with Tofu and Shiitake Mushrooms in a Clay Pot',
      zomato: { price: 521, rating: 4.2, review: 'Nice', image: '/Images/d159.jpeg' },
      swiggy: { price: 549, rating: 4.1, review: 'Good', image: '/Images/d159.jpeg' }
    },
    160: {
      id: 160,
      name: 'Hong Kong-Style Macaroni Soup',
      zomato: { price: 487, rating: 4.1, review: 'Good', image: '/Images/d160.jpeg' },
      swiggy: { price: 449, rating: 4.0, review: 'Nice', image: '/Images/d160.jpeg' }
    },
    161: {
      id: 161,
      name: 'Tomato and Egg with Rice',
      zomato: { price: 999, rating: 4.0, review: 'Nice', image: '/Images/d161.jpeg' },
      swiggy: { price: 979, rating: 3.9, review: 'Okay', image: '/Images/d161.jpeg' }
    },
    162: {
      id: 162,
      name: 'Salted Pork Congee with Century Egg',
      zomato: { price: 323, rating: 4.0, review: 'Nice', image: '/Images/d162.jpeg' },
      swiggy: { price: 351, rating: 3.8, review: 'Okay', image: '/Images/d162.jpeg' }
    },
    163: {
      id: 163,
      name: 'Tang Jai Jook',
      zomato: { price: 444, rating: 4.1, review: 'Nice', image: '/Images/d163.jpeg' },
      swiggy: { price: 420, rating: 4.0, review: 'Good', image: '/Images/d163.jpeg' }
    },
    164: {
      id: 164,
      name: 'Tanghulu',
      zomato: { price: 732, rating: 4.2, review: 'Good', image: '/Images/d164.jpeg' },
      swiggy: { price: 760, rating: 4.0, review: 'Nice', image: '/Images/d164.jpeg' }
    },
    165: {
      id: 165,
      name: 'Crispy Stuffed Lotus Root with Pork',
      zomato: { price: 235, rating: 4.3, review: 'Good', image: '/Images/d165.jpeg' },
      swiggy: { price: 250, rating: 4.2, review: 'Nice', image: '/Images/d165.jpeg' }
    },
    166: {
      id: 166,
      name: 'Salt and Pepper Tofu',
      zomato: { price: 878, rating: 3.9, review: 'Okay', image: '/Images/d166.jpeg' },
      swiggy: { price: 840, rating: 3.8, review: 'Okay', image: '/Images/d166.jpeg' }
    },
    167: {
      id: 167,
      name: 'Smashed Cucumber Salad',
      zomato: { price: 999, rating: 4.0, review: 'Nice', image: '/Images/d167.jpeg' },
      swiggy: { price: 969, rating: 3.8, review: 'Okay', image: '/Images/d167.jpeg' }
    },
    168: {
      id: 168,
      name: 'Drunken Chicken',
      zomato: { price: 123, rating: 4.2, review: 'Good', image: '/Images/d168.jpeg' },
      swiggy: { price: 139, rating: 4.1, review: 'Nice', image: '/Images/d168.jpeg' }
    },
    169: {
      id: 169,
      name: 'Sweet and Sour Pork',
      zomato: { price: 567, rating: 4.1, review: 'Nice', image: '/Images/d169.jpeg' },
      swiggy: { price: 520, rating: 4.0, review: 'Good', image: '/Images/d169.jpeg' }
    },
    170: {
      id: 170,
      name: 'Dumplings with a Crispy Skirt',
      zomato: { price: 876, rating: 3.9, review: 'Okay', image: '/Images/d170.jpeg' },
      swiggy: { price: 899, rating: 3.8, review: 'Okay', image: '/Images/d170.jpeg' }
    },
    171: {
      id: 171,
      name: 'Chicken Pot Stickers with Dipping Sauce',
      zomato: { price: 345, rating: 4.1, review: 'Nice', image: '/Images/d171.jpeg' },
      swiggy: { price: 320, rating: 4.0, review: 'Good', image: '/Images/d171.jpeg' }
    },
    172: {
      id: 172,
      name: 'Hot Pot at Home',
      zomato: { price: 786, rating: 4.2, review: 'Good', image: '/Images/d172.jpeg' },
      swiggy: { price: 799, rating: 4.1, review: 'Nice', image: '/Images/d172.jpeg' }
    },
    173: {
      id: 173,
      name: 'Hong Kong Egg Tarts',
      zomato: { price: 234, rating: 4.0, review: 'Nice', image: '/Images/d173.jpeg' },
      swiggy: { price: 209, rating: 3.9, review: 'Okay', image: '/Images/d173.jpeg' }
    },
    174: {
      id: 174,
      name: 'Hong Dou Tang',
      zomato: { price: 678, rating: 4.2, review: 'Nice', image: '/Images/d174.jpeg' },
      swiggy: { price: 645, rating: 4.0, review: 'Good', image: '/Images/d174.jpeg' }
    },
    175: {
      id: 175,
      name: 'Sweet Potato Tapioca Dessert Soup',
      zomato: { price: 908, rating: 4.1, review: 'Nice', image: '/Images/d175.jpeg' },
      swiggy: { price: 929, rating: 4.0, review: 'Good', image: '/Images/d175.jpeg' }
    },
    176: {
      id: 176,
      name: 'Hong Kong-Style Condensed Milk Toast',
      zomato: { price: 465, rating: 4.0, review: 'Nice', image: '/Images/d176.jpeg' },
      swiggy: { price: 435, rating: 3.8, review: 'Okay', image: '/Images/d176.jpeg' }
    },
    177: {
      id: 177,
      name: 'Nian Gao',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d177.jpeg' },
      swiggy: { price: 264, rating: 4.0, review: 'Good', image: '/Images/d177.jpeg' }
    },
    178: {
      id: 178,
      name: 'Grandma\'s Tepong Pork',
      zomato: { price: 897, rating: 4.2, review: 'Good', image: '/Images/d178.jpeg' },
      swiggy: { price: 869, rating: 4.1, review: 'Nice', image: '/Images/d178.jpeg' }
    },
    179: {
      id: 179,
      name: 'Shanghai Red-Braised Pork with Eggs',
      zomato: { price: 786, rating: 4.3, review: 'Good', image: '/Images/d179.jpeg' },
      swiggy: { price: 759, rating: 4.2, review: 'Nice', image: '/Images/d179.jpeg' }
    },
    180: {
      id: 180,
      name: 'Orange Chicken',
      zomato: { price: 543, rating: 4.1, review: 'Nice', image: '/Images/d180.jpeg' },
      swiggy: { price: 559, rating: 4.0, review: 'Good', image: '/Images/d180.jpeg' }
    },
    181: {
      id: 181,
      name: 'Pressed Sliced Tofu Salad',
      zomato: { price: 456, rating: 4.2, review: 'Nice', image: '/Images/d181.jpeg' },
      swiggy: { price: 479, rating: 4.0, review: 'Good', image: '/Images/d181.jpeg' }
    },
    182: {
      id: 182,
      name: 'Buddha\'s Delight',
      zomato: { price: 765, rating: 4.3, review: 'Good', image: '/Images/d182.jpeg' },
      swiggy: { price: 725, rating: 4.1, review: 'Nice', image: '/Images/d182.jpeg' }
    },
    183: {
      id: 183,
      name: 'Mapo Tofu',
      zomato: { price: 987, rating: 4.1, review: 'Nice', image: '/Images/d183.jpeg' },
      swiggy: { price: 949, rating: 4.0, review: 'Good', image: '/Images/d183.jpeg' }
    },
    184: {
      id: 184,
      name: 'Mushroom Mapo Tofu',
      zomato: { price: 234, rating: 4.0, review: 'Nice', image: '/Images/d184.jpeg' },
      swiggy: { price: 249, rating: 3.9, review: 'Okay', image: '/Images/d184.jpeg' }
    },
    185: {
      id: 185,
      name: 'The Best Pork Fried Rice',
      zomato: { price: 765, rating: 4.1, review: 'Nice', image: '/Images/d185.jpeg' },
      swiggy: { price: 729, rating: 4.0, review: 'Good', image: '/Images/d185.jpeg' }
    },
    186: {
      id: 186,
      name: 'Classic Lo Mein',
      zomato: { price: 345, rating: 4.2, review: 'Nice', image: '/Images/d186.jpeg' },
      swiggy: { price: 329, rating: 4.1, review: 'Good', image: '/Images/d186.jpeg' }
    },
    187: {
      id: 187,
      name: 'Tea Eggs',
      zomato: { price: 654, rating: 4.0, review: 'Nice', image: '/Images/d187.jpeg' },
      swiggy: { price: 619, rating: 3.9, review: 'Okay', image: '/Images/d187.jpeg' }
    },
    188: {
      id: 188,
      name: 'Tangyuan with Peanut Filling',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d188.jpeg' },
      swiggy: { price: 219, rating: 4.0, review: 'Good', image: '/Images/d188.jpeg' }
    },
    189: {
      id: 189,
      name: 'Ba Bao Fan',
      zomato: { price: 567, rating: 4.0, review: 'Nice', image: '/Images/d189.jpeg' },
      swiggy: { price: 548, rating: 3.9, review: 'Okay', image: '/Images/d189.jpeg' }
    },
    190: {
      id: 190,
      name: 'Chinese Almond Cookies',
      zomato: { price: 987, rating: 4.2, review: 'Good', image: '/Images/d190.jpeg' },
      swiggy: { price: 959, rating: 4.0, review: 'Nice', image: '/Images/d190.jpeg' }
    },
    191: {
      id: 191,
      name: 'Fa Gao',
      zomato: { price: 456, rating: 4.1, review: 'Nice', image: '/Images/d191.jpeg' },
      swiggy: { price: 479, rating: 4.0, review: 'Good', image: '/Images/d191.jpeg' }
    },
    192: {
      id: 192,
      name: 'Dan-Dan Noodles',
      zomato: { price: 234, rating: 4.2, review: 'Nice', image: '/Images/d192.jpeg' },
      swiggy: { price: 259, rating: 4.0, review: 'Good', image: '/Images/d192.jpeg' }
    },
    193: {
      id: 193,
      name: 'Dan Dan Mian',
      zomato: { price: 654, rating: 4.0, review: 'Nice', image: '/Images/d193.jpeg' },
      swiggy: { price: 629, rating: 3.9, review: 'Okay', image: '/Images/d193.jpeg' }
    },
    194: {
      id: 194,
      name: 'Chili Oil',
      zomato: { price: 876, rating: 4.2, review: 'Good', image: '/Images/d194.jpeg' },
      swiggy: { price: 850, rating: 4.0, review: 'Nice', image: '/Images/d194.jpeg' }
    },
    195: {
      id: 195,
      name: 'Easy Stir-Fry Sauce',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d195.jpeg' },
      swiggy: { price: 269, rating: 4.0, review: 'Good', image: '/Images/d195.jpeg' }
    },
    196: {
      id: 196,
      name: 'Scallion-Ginger Sauce',
      zomato: { price: 765, rating: 4.2, review: 'Good', image: '/Images/d196.jpeg' },
      swiggy: { price: 749, rating: 4.1, review: 'Nice', image: '/Images/d196.jpeg' }
    },
    197: {
      id: 197,
      name: 'Bai Qie Ji (White Cut Chicken)',
      zomato: { price: 987, rating: 4.0, review: 'Nice', image: '/Images/d197.jpeg' },
      swiggy: { price: 958, rating: 3.9, review: 'Okay', image: '/Images/d197.jpeg' }
    },
    198: {
      id: 198,
      name: 'Soy Sauce Chicken (See Yao Gai)',
      zomato: { price: 234, rating: 4.2, review: 'Nice', image: '/Images/d198.jpeg' },
      swiggy: { price: 260, rating: 4.0, review: 'Good', image: '/Images/d198.jpeg' }
    },
    199: {
      id: 199,
      name: 'Crisp Seaweed with Peanuts',
      zomato: { price: 567, rating: 4.1, review: 'Nice', image: '/Images/d199.jpeg' },
      swiggy: { price: 540, rating: 4.0, review: 'Good', image: '/Images/d199.jpeg' }
    },
    200: {
      id: 200,
      name: 'Chinese Milk Bread',
      zomato: { price: 987, rating: 4.2, review: 'Good', image: '/Images/d200.jpeg' },
      swiggy: { price: 950, rating: 4.1, review: 'Nice', image: '/Images/d200.jpeg' }
    }
    
    
    // Add more products
  };

  return products[id];
};

const ProductComparisonDetail = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Platform</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Rating</th>
            <th className="border border-gray-400 px-4 py-2">Review</th>
            <th className="border border-gray-400 px-4 py-2">Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Zomato</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.zomato.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.zomato.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Swiggy</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.swiggy.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.swiggy.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/explore-dining"
          className="text-blue-700 font-bold inline-block px-4 py-2 bg-blue-200 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white duration-300 ease-in-out"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductComparisonDetail;
