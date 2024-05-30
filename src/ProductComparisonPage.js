import React from 'react';
import { useParams } from 'react-router-dom';
import ProductComparisonTable from './ProductComparisonTable';

const ProductComparisonPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
      <ProductComparisonTable product={product} />
    </div>
  );
};

const getProductById = (id) => {
  const products = {
    1: {
      id: 1,
      name: 'Dell 15 Laptop',
      amazon: { price: 44990, rating: 4.5, review: 'Good', image: '/Images/1.jpg' },
      flipkart: { price: 44000, rating: 4.6, review: 'Very Good', image: '/Images/1.jpg' }
    },
    2: {
      id: 2,
      name: 'Lenovo IdeaPad 3',
      amazon: { price: 33990, rating: 4.2, review: 'Okay', image: '/Images/2.jpg' },
      flipkart: { price: 32999, rating: 4.3, review: 'Good', image: '/Images/2.jpg' }
    },
    3: {
      id: 3,
      name: 'HP Laptop 15s',
      amazon: { price: 55990, rating: 4.2, review: 'Okay', image: '/Images/3.jpg' },
      flipkart: { price: 55199, rating: 4.3, review: 'Niceeee', image: '/Images/3.jpg' }
    },
    4: {
      id: 4,
      name: 'ASUS Vivobook 15',
      amazon: { price: 53999, rating: 4.5, review: 'Good', image: '/Images/4.jpg' },
      flipkart: { price: 55500, rating: 4.6, review: 'Very Good', image: '/Images/4.jpg' }
    },
    5: {
      id: 5,
      name: 'Samsung Galaxy Book3',
      amazon: { price: 89040, rating: 4.2, review: 'Okay', image: '/Images/5.jpg' },
      flipkart: { price: 88999, rating: 4.3, review: 'Good', image: '/Images/5.jpg' }
    },
    6: {
      id: 6,
      name: 'MSI Modern 14',
      amazon: { price: 54831, rating: 4.2, review: 'Okay', image: '/Images/6.jpg' },
      flipkart: { price: 55999, rating: 4.3, review: 'Niceeee', image: '/Images/6.jpg' }
    },
    7: {
      id: 7,
      name: 'Apple 2023 MacBook Pro',
      amazon: { price: 199900, rating: 4.5, review: 'Good', image: '/Images/7.jpg' },
      flipkart: { price: 198999, rating: 4.6, review: 'Very Good', image: '/Images/7.jpg' }
    },
    8: {
      id: 8,
      name: 'Apple 2022 MacBook Air',
      amazon: { price: 102990, rating: 4.2, review: 'Okay', image: '/Images/8.jpg' },
      flipkart: { price: 112999, rating: 4.3, review: 'Good', image: '/Images/8.jpg' }
    },
    9: {
      id: 9,
      name: 'Mi Notebook Horizon Edition',
      amazon: { price: 45040, rating: 4.2, review: 'Okay', image: '/Images/9.jpg' },
      flipkart: { price: 44999, rating: 4.3, review: 'Niceeee', image: '/Images/9.jpg' }
    },
    10: {
      id: 10,
      name: 'ASUS VivoBook 15 (2021)',
      amazon: { price: 23999, rating: 4.5, review: 'Good', image: '/Images/10.jpg' },
      flipkart: { price: 23599, rating: 4.6, review: 'Very Good', image: '/Images/10.jpg' }
    },
    11: {
      id:11,
      name: 'Apple iPhone 15 (256 GB)',
      amazon: { price: 80990, rating: 4.2, review: 'Okay', image: '/Images/11.jpg' },
      flipkart: { price: 79999, rating: 4.3, review: 'Good', image: '/Images/11.jpg' }
    },
    12: {
      id: 12,
      name: 'Apple iPhone 15 Pro (512 GB)',
      amazon: { price: 158990, rating: 4.2, review: 'Okay', image: '/Images/12.jpg' },
      flipkart: { price: 156999, rating: 4.3, review: 'Niceeee', image: '/Images/12.jpg' }
    },
    13: {
      id: 13,
      name: 'OnePlus 12',
      amazon: { price: 69999, rating: 4.5, review: 'Good', image: '/Images/13.jpg' },
      flipkart: { price: 71999, rating: 4.6, review: 'Very Good', image: '/Images/13.jpg' }
    },
    14: {
      id: 14,
      name: 'Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)',
      amazon: { price: 10990, rating: 4.2, review: 'Okay', image: '/Images/14.jpg' },
      flipkart: { price: 11999, rating: 4.3, review: 'Good', image: '/Images/14.jpg' }
    },
    15: {
      id: 15,
      name: 'Realme narzo N53',
      amazon: { price: 8999, rating: 4.2, review: 'Okay', image: '/Images/15.jpg' },
      flipkart: { price: 9999, rating: 4.3, review: 'Niceeee', image: '/Images/15.jpg' }
    },
    16: {
      id: 16,
      name: 'Realme narzo 60X 5G',
      amazon: { price: 12499, rating: 4.5, review: 'Good', image: '/Images/16.jpg' },
      flipkart: { price: 12999, rating: 4.6, review: 'Very Good', image: '/Images/16.jpg' }
    },
    17: {
      id: 17,
      name: 'OnePlus Nord CE 3 Lite 5G',
      amazon: { price: 19999, rating: 4.2, review: 'Okay', image: '/Images/17.jpg' },
      flipkart: { price: 20999, rating: 4.3, review: 'Good', image: '/Images/17.jpg' }
    },
    18: {
      id: 18,
      name: 'Redmi 13C',
      amazon: { price: 8999, rating: 4.2, review: 'Okay', image: '/Images/18.jpg' },
      flipkart: { price: 8499, rating: 4.3, review: 'Niceeee', image: '/Images/18.jpg' }
    },
    19: {
      id: 19,
      name: 'POCO M6 Pro 5G',
      amazon: { price: 12999, rating: 4.2, review: 'Okay', image: '/Images/19.jpg' },
      flipkart: { price: 12999, rating: 4.3, review: 'Good', image: '/Images/19.jpg' }
    },
    20: {
      id: 20,
      name: 'iQOO Z7 Pro 5G',
      amazon: { price: 23999, rating: 4.2, review: 'Okay', image: '/Images/20.jpg' },
      flipkart: { price: 23999, rating: 4.3, review: 'Niceeee', image: '/Images/20.jpg' }
    },
    
      21: {
        id: 21,
        name: 'Noise Quad Call',
        amazon: { price: 1199, rating: 4.1, review: 'Nice earbuds with good sound quality.', image: '/Images/21.jpg' },
        flipkart: { price: 1299, rating: 3.9, review: 'Okay product, expected better.', image: '/Images/21.jpg' }
      },
      22: {
        id: 22,
        name: 'Noise ColorFit Pulse 3',
        amazon: { price: 1399, rating: 4.6, review: 'Great fitness tracker, accurate heart rate monitoring.', image: '/Images/22.jpg' },
        flipkart: { price: 1249, rating: 4.3, review: 'Good product, comfortable to wear.', image: '/Images/22.jpg' }
      },
      23: {
        id: 23,
        name: 'boAt Flash',
        amazon: { price: 999, rating: 3.7, review: 'Decent earphones for the price.', image: '/Images/23.jpg' },
        flipkart: { price: 899, rating: 3.5, review: 'Not as expected, average quality.', image: '/Images/23.jpg' }
      },
      24: {
        id: 24,
        name: 'boAt Xtend Smart Watch',
        amazon: { price: 1199, rating: 3.9, review: 'Good smartwatch with useful features.', image: '/Images/24.jpg' },
        flipkart: { price: 1249, rating: 4.0, review: 'Value for money, stylish design.', image: '/Images/24.jpg' }
      },
      25: {
        id: 25,
        name: 'Fire-Boltt Ninja Call Pro Plus',
        amazon: { price: 1199, rating: 4.1, review: 'Decent quality earphones, good sound.', image: '/Images/25.jpg' },
        flipkart: { price: 1249, rating: 4.0, review: 'Nice product, comfortable fit.', image: '/Images/25.jpg' }
      },
      26: {
        id: 26,
        name: 'Noise ColorFit Ultra 3',
        amazon: { price: 2799, rating: 4.3, review: 'Great smartwatch with long battery life.', image: '/Images/26.jpg' },
        flipkart: { price: 2799, rating: 4.0, review: 'Satisfied with the purchase, good value.', image: '/Images/26.jpg' }
      },
      27: {
        id: 27,
        name: 'TIMEX iConnect EVO+',
        amazon: { price: 2395, rating: 3.1, review: 'Disappointing product, poor quality.', image: '/Images/27.jpg' },
        flipkart: { price: 3599, rating: 2.9, review: 'Not worth the price, expected better.', image: '/Images/27.jpg' }
      },
      28: {
        id: 28,
        name: 'Apple Watch SE (2nd Gen)',
        amazon: { price: 28900, rating: 4.6, review: 'Excellent smartwatch, highly recommend.', image: '/Images/28.jpg' },
        flipkart: { price: 28990, rating: 4.5, review: 'Great product, works flawlessly.', image: '/Images/28.jpg' }
      },
      29: {
        id: 29,
        name: 'Apple Watch Ultra',
        amazon: { price: 82900, rating: 4.8, review: 'Top-notch quality, worth every penny.', image: '/Images/29.jpg' },
        flipkart: { price: 81999, rating: 4.2, review: 'Good product, but a bit expensive.', image: '/Images/29.jpg' }
      },
      30: {
        id: 30,
        name: 'Samsung Galaxy Watch4',
        amazon: { price: 10999, rating: 4.6, review: 'Great smartwatch, love the design.', image: '/Images/30.jpg' },
        flipkart: { price: 10509, rating: 4.5, review: 'Happy with the purchase, great features.', image: '/Images/30.jpg' }
      
    },
    
    31: {
      id: 31,
      name: 'LEQTRONIQ Digital Camera 4K',
      amazon: { price: 17990, rating: 4.3, review: 'Excellent camera quality, worth the price.', image: '/Images/31.jpg' },
      flipkart: { price: 18199, rating: 4.1, review: 'Good camera, but slightly overpriced.', image: '/Images/31.jpg' }
    },
    32: {
      id: 32,
      name: 'Fujifilm Instax Mini 11',
      amazon: { price: 5999, rating: 4.0, review: 'Fun camera for instant photos, kids love it.', image: '/Images/32.jpg' },
      flipkart: { price: 4999, rating: 3.9, review: 'Decent camera, easy to use.', image: '/Images/32.jpg' }
    },
    33: {
      id: 33,
      name: 'Nikon D7500 20.9MP Digital SLR Camera',
      amazon: { price: 93950, rating: 4.6, review: 'Professional-grade camera, exceptional performance.', image: '/Images/33.jpg' },
      flipkart: { price: 99999, rating: 4.4, review: 'Great camera for photography enthusiasts.', image: '/Images/33.jpg' }
    },
    34: {
      id: 34,
      name: 'Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR',
      amazon: { price: 78989, rating: 4.5, review: 'Amazing mirrorless camera, great features.', image: '/Images/34.jpg' },
      flipkart: { price: 79999, rating: 4.3, review: 'Solid camera choice, good image quality.', image: '/Images/34.jpg' }
    },
    35: {
      id: 35,
      name: 'Canon EOS 1500D 24.1 Digital SLR Camera',
      amazon: { price: 43990, rating: 4.2, review: 'Good entry-level DSLR, easy to learn.', image: '/Images/35.jpg' },
      flipkart: { price: 41999, rating: 4.0, review: 'Decent camera for beginners.', image: '/Images/35.jpg' }
    },
    36: {
      id: 36,
      name: 'Lenovo Tab K10 FHD|10.3 Inch',
      amazon: { price: 13999, rating: 3.8, review: 'Affordable tablet with decent performance.', image: '/Images/36.jpg' },
      flipkart: { price: 13999, rating: 3.7, review: 'Okay tablet, nothing special.', image: '/Images/36.jpg' }
    },
    37: {
      id: 37,
      name: 'Xiaomi Pad 6',
      amazon: { price: 27790, rating: 4.0, review: 'Value for money tablet, good for entertainment.', image: '/Images/37.jpg' },
      flipkart: { price: 27999, rating: 3.9, review: 'Decent tablet, but could be better.', image: '/Images/37.jpg' }
    },
    38: {
      id: 38,
      name: 'HONOR Pad X9',
      amazon: { price: 15999, rating: 3.6, review: 'Average tablet, nothing exceptional.', image: '/Images/38.jpg' },
      flipkart: { price: 14599, rating: 3.5, review: 'Okay product, but expected more.', image: '/Images/38.jpg' }
    },
    39: {
      id: 39,
      name: 'Samsung Galaxy Tab A9',
      amazon: { price: 12704, rating: 3.9, review: 'Good tablet for daily use, reliable brand.', image: '/Images/39.jpg' },
      flipkart: { price: 13999, rating: 3.8, review: 'Decent performance, good battery life.', image: '/Images/39.jpg' }
    },
    40: {
      id: 40,
      name: 'Samsung Galaxy Tab S9',
      amazon: { price: 83990, rating: 4.3, review: 'Premium tablet with great features.', image: '/Images/40.jpg' },
      flipkart: { price: 83999, rating: 4.2, review: 'Satisfied with the product, good value.', image: '/Images/40.jpg' }
    },
    41: {
      id: 41,
      name: 'Ambrane Unbreakable 3A Fast Charging 1.5m',
      amazon: { price: 179, rating: 3.5, review: 'Decent quality cable, charges quickly.', image: '/Images/41.jpg' },
      flipkart: { price: 199, rating: 3.4, review: 'Okay cable, does the job.', image: '/Images/41.jpg' }
    },
    42: {
      id: 42,
      name: 'STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad',
      amazon: { price: 99, rating: 4.0, review: 'Good quality mouse pad, durable material.', image: '/Images/42.jpg' },
      flipkart: { price: 89, rating: 4.2, review: 'Excellent mouse pad, very comfortable.', image: '/Images/42.jpg' }
    },
    43: {
      id: 43,
      name: 'Logitech B170 Wireless Mouse, 2.4 GHz ',
      amazon: { price: 595, rating: 3.8, review: 'Decent wireless mouse, works well.', image: '/Images/43.jpg' },
      flipkart: { price: 599, rating: 4.0, review: 'Good mouse, easy to connect and use.', image: '/Images/43.jpg' }
    },
    44: {
      id: 44,
      name: 'HP v236w USB 2.0 64GB Pen Drive',
      amazon: { price: 396, rating: 4.1, review: 'Reliable pen drive, good storage capacity.', image: '/Images/44.jpg' },
      flipkart: { price: 349, rating: 4.3, review: 'Great pen drive, fast data transfer.', image: '/Images/44.jpg' }
    },
    45: {
      id: 45,
      name: 'STRIFF FLSB Laptop Stand, MacBook Stand',
      amazon: { price: 199, rating: 4.2, review: 'Sturdy laptop stand, ergonomic design.', image: '/Images/45.jpg' },
      flipkart: { price: 299, rating: 3.9, review: 'Decent laptop stand, could be more stable.', image: '/Images/45.jpg' }
    },
    46: {
      id: 46,
      name: 'USB C to Lightning Cable 1M',
      amazon: { price: 664, rating: 4.0, review: 'Good quality cable, fast charging.', image: '/Images/46.jpg' },
      flipkart: { price: 699, rating: 4.1, review: 'Nice cable, durable material.', image: '/Images/46.jpg' }
    },
    47: {
      id: 47,
      name: 'American Tourister Valex 28 Ltrs Large Laptop Backpack',
      amazon: { price: 1499, rating: 4.3, review: 'Spacious backpack, comfortable to carry.', image: '/Images/47.jpg' },
      flipkart: { price: 1599, rating: 4.2, review: 'Good quality backpack, value for money.', image: '/Images/47.jpg' }
    },
    48: {
      id: 48,
      name: 'SanDisk Ultra Dual 64 GB USB 3.0 OTG Pen Drive',
      amazon: { price: 619, rating: 4.0, review: 'Fast and reliable pen drive, good storage.', image: '/Images/48.jpg' },
      flipkart: { price: 659, rating: 4.1, review: 'Nice pen drive, easy to use.', image: '/Images/48.jpg' }
    },
    49: {
      id: 49,
      name: 'Logitech MK215 Wireless Keyboard and Mouse Combo',
      amazon: { price: 1345, rating: 4.2, review: 'Great combo, good quality keyboard and mouse.', image: '/Images/49.jpg' },
      flipkart: { price: 1399, rating: 4.3, review: 'Excellent combo, highly recommend.', image: '/Images/49.jpg' }
    },
    50: {
      id: 50,
      name: 'Logitech K480 Wireless Multi-Device Keyboard',
      amazon: { price: 2499, rating: 4.1, review: 'Nice wireless keyboard, comfortable to use.', image: '/Images/50.jpg' },
      flipkart: { price: 2459, rating: 4.0, review: 'Good keyboard, but connectivity issues.', image: '/Images/50.jpg' }
    },
    51: {
      id: 51,
      name: 'Chinos',
      amazon: { price: 800, rating: 4.2, review: 'Comfortable fit', image: '/Images/51.jpg' },
      flipkart: { price: 850, rating: 4.4, review: 'Great quality', image: '/Images/51.jpg' }
    },
52: {
      id: 52,
      name: 'Formal Pants',
      amazon: { price: 1200, rating: 4.5, review: 'Perfect for office wear', image: '/Images/52.jpg' },
      flipkart: { price: 1250, rating: 4.6, review: 'Excellent quality material', image: '/Images/52.jpg' }
    },
53: {
      id: 53,
      name: 'Sneakers',
      amazon: { price: 1800, rating: 4.3, review: 'Comfortable and stylish', image: '/Images/53.jpg' },
      flipkart: { price: 1900, rating: 4.4, review: 'Great for casual outings', image: '/Images/53.jpg' }
    },
    54: {
      id: 54,
      name: 'T-Shirt',
      amazon: { price: 500, rating: 4.0, review: 'Comfortable and casual', image: '/Images/54.jpg' },
      flipkart: { price: 550, rating: 4.2, review: 'Good quality fabric', image: '/Images/54.jpg' }
    },
55: {
      id: 55,
      name: 'Saree',
      amazon: { price: 1500, rating: 4.5, review: 'Elegant and traditional', image: '/Images/55.jpg' },
      flipkart: { price: 1600, rating: 4.7, review: 'Beautiful design', image: '/Images/55.jpg' }
    },
56: {
      id: 56,
      name: 'Kurta',
      amazon: { price: 900, rating: 4.3, review: 'Stylish and comfortable', image: '/Images/56.jpg' },
      flipkart: { price: 950, rating: 4.4, review: 'Perfect for festive occasions', image: '/Images/56.jpg' }
    },
57: {
      id: 57,
      name: 'Slippers',
      amazon: { price: 300, rating: 3.8, review: 'Simple and affordable', image: '/Images/57.jpg' },
      flipkart: { price: 350, rating: 4.0, review: 'Durable and lightweight', image: '/Images/57.jpg' }
    },
58: {
      id: 58,
      name: 'Lehenga',
      amazon: { price: 2000, rating: 4.6, review: 'Exquisite design', image: '/Images/58.jpg' },
      flipkart: { price: 2100, rating: 4.8, review: 'High-quality fabric', image: '/Images/58.jpg' }
    },
59: {
      id: 59,
      name: 'Crop Top',
      amazon: { price: 700, rating: 4.1, review: 'Trendy and fashionable', image: '/Images/59.jpg' },
      flipkart: { price: 750, rating: 4.3, review: 'Versatile and stylish', image: '/Images/59.jpg' }
    },
60: {
      id: 60,
      name: 'Shoes',
      amazon: { price: 1700, rating: 4.4, review: 'Sleek and modern design', image: '/Images/60.jpg' },
      flipkart: { price: 1800, rating: 4.5, review: 'Great for everyday wear', image: '/Images/60.jpg' }
    },
    61: {
      id: 61,
      name: 'Denim Jeans',
      amazon: { price: 1500, rating: 4.7, review: 'Classic and durable', image: '/Images/61.jpg' },
      flipkart: { price: 1550, rating: 4.8, review: 'Perfect fit', image: '/Images/61.jpg' }
    },
62: {
      id: 62,
      name: 'Hoodie',
      amazon: { price: 1200, rating: 4.5, review: 'Warm and comfortable', image: '/Images/62.jpg' },
      flipkart: { price: 1250, rating: 4.6, review: 'Stylish and trendy', image: '/Images/62.jpg' }
    },
63: {
      id: 63,
      name: 'Maxi Dress',
      amazon: { price: 1800, rating: 4.6, review: 'Elegant and flowy', image: '/Images/63.jpg' },
      flipkart: { price: 1850, rating: 4.7, review: 'Perfect for special occasions', image: '/Images/63.jpg' }
    },
64: {
      id: 64,
      name: 'Blazer',
      amazon: { price: 2000, rating: 4.4, review: 'Sharp and sophisticated', image: '/Images/64.jpg' },
      flipkart: { price: 2100, rating: 4.5, review: 'Great for formal events', image: '/Images/64.jpg' }
    },
65: {
      id: 65,
      name: 'Jumpsuit',
      amazon: { price: 1600, rating: 4.3, review: 'Stylish and versatile', image: '/Images/65.jpg' },
      flipkart: { price: 1650, rating: 4.4, review: 'Comfortable and chic', image: '/Images/65.jpg' }
    },
66: {
      id: 66,
      name: 'Polo Shirt',
      amazon: { price: 1000, rating: 4.2, review: 'Casual and stylish', image: '/Images/66.jpg' },
      flipkart: { price: 1050, rating: 4.3, review: 'Good quality fabric', image: '/Images/66.jpg' }
    },
67: {
      id: 67,
      name: 'Palazzo Pants',
      amazon: { price: 850, rating: 4.0, review: 'Comfortable and airy', image: '/Images/67.jpg' },
      flipkart: { price: 900, rating: 4.1, review: 'Trendy and lightweight', image: '/Images/67.jpg' }
    },
68: {
      id: 68,
      name: 'Anarkali Suit',
      amazon: { price: 1900, rating: 4.5, review: 'Traditional and elegant', image: '/Images/68.jpg' },
      flipkart: { price: 1950, rating: 4.6, review: 'Beautiful embroidery', image: '/Images/68.jpg' }
    },
69: {
      id: 69,
      name: 'Harem Pants',
      amazon: { price: 700, rating: 4.1, review: 'Unique and comfortable', image: '/Images/69.jpg' },
      flipkart: { price: 750, rating: 4.2, review: 'Stylish and relaxed fit', image: '/Images/69.jpg' }
    },
70: {
      id: 70,
      name: 'Trench Coat',
      amazon: { price: 2000, rating: 4.7, review: 'Timeless and versatile', image: '/Images/70.jpg' },
      flipkart: { price: 2050, rating: 4.8, review: 'Great for layering', image: '/Images/70.jpg' }
    },
    71: {
      id: 71,
      name: 'Crop Flare Jeans',
      amazon: { price: 1400, rating: 4.6, review: 'Trendy and flattering', image: '/Images/71.jpg' },
      flipkart: { price: 1450, rating: 4.7, review: 'Perfect for casual outings', image: '/Images/71.jpg' }
    },
72: {
      id: 72,
      name: 'Turtleneck Sweater',
      amazon: { price: 1100, rating: 4.3, review: 'Cozy and warm', image: '/Images/72.jpg' },
      flipkart: { price: 1150, rating: 4.4, review: 'Classic winter staple', image: '/Images/72.jpg' }
    },
73: {
      id: 73,
      name: 'Pleated Skirt',
      amazon: { price: 900, rating: 4.2, review: 'Chic and feminine', image: '/Images/73.jpg' },
      flipkart: { price: 950, rating: 4.3, review: 'Versatile wardrobe piece', image: '/Images/73.jpg' }
    },
74: {
      id: 74,
      name: 'Tunic Top',
      amazon: { price: 750, rating: 4.0, review: 'Flowy and comfortable', image: '/Images/74.jpg' },
      flipkart: { price: 800, rating: 4.1, review: 'Effortlessly stylish', image: '/Images/74.jpg' }
    },
75: {
      id: 75,
      name: 'Midi Dress',
      amazon: { price: 1700, rating: 4.5, review: 'Elegant and versatile', image: '/Images/75.jpg' },
      flipkart: { price: 1750, rating: 4.6, review: 'Perfect for various occasions', image: '/Images/75.jpg' }
    },
76: {
      id: 76,
      name: 'Denim Jacket',
      amazon: { price: 1600, rating: 4.4, review: 'Classic and timeless', image: '/Images/76.jpg' },
      flipkart: { price: 1650, rating: 4.5, review: 'Stylish outerwear staple', image: '/Images/76.jpg' }
    },
77: {
      id: 77,
      name: 'Pullover Hoodie',
      amazon: { price: 1300, rating: 4.1, review: 'Comfortable and cozy', image: '/Images/77.jpg' },
      flipkart: { price: 1350, rating: 4.2, review: 'Perfect for casual days', image: '/Images/77.jpg' }
    },
78: {
      id: 78,
      name: 'High-Waisted Jeans',
      amazon: { price: 1200, rating: 4.3, review: 'Flattering and trendy', image: '/Images/78.jpg' },
      flipkart: { price: 1250, rating: 4.4, review: 'Great fit and quality', image: '/Images/78.jpg' }
    },
79: {
      id: 79,
      name: 'Wrap Dress',
      amazon: { price: 1800, rating: 4.7, review: 'Figure-flattering and stylish', image: '/Images/79.jpg' },
      flipkart: { price: 1850, rating: 4.8, review: 'Versatile wardrobe essential', image: '/Images/79.jpg' }
    },
80: {
      id: 80,
      name: 'Oversized Sweater',
      amazon: { price: 1500, rating: 4.6, review: 'Comfortable and stylish', image: '/Images/80.jpg' },
      flipkart: { price: 1550, rating: 4.7, review: 'Perfect for layering', image: '/Images/80.jpg' }
    },
    81: {
      id: 81,
      name: 'Boat Neck Top',
      amazon: { price: 600, rating: 4.2, review: 'Stylish and versatile', image: '/Images/81.jpg' },
      flipkart: { price: 650, rating: 4.3, review: 'Comfortable fit', image: '/Images/81.jpg' }
    },
82: {
      id: 82,
      name: 'Cropped Wide-Leg Pants',
      amazon: { price: 850, rating: 4.5, review: 'Fashionable and trendy', image: '/Images/82.jpg' },
      flipkart: { price: 900, rating: 4.6, review: 'Perfect for summer', image: '/Images/82.jpg' }
    },
83: {
      id: 83,
      name: 'Bomber Jacket',
      amazon: { price: 1300, rating: 4.4, review: 'Cool and edgy', image: '/Images/83.jpg' },
      flipkart: { price: 1350, rating: 4.5, review: 'Stylish outerwear', image: '/Images/83.jpg' }
    },
84: {
      id: 84,
      name: 'Denim Skirt',
      amazon: { price: 950, rating: 4.1, review: 'Casual and chic', image: '/Images/84.jpg' },
      flipkart: { price: 1000, rating: 4.2, review: 'Versatile wardrobe staple', image: '/Images/84.jpg' }
    },
85: {
      id: 85,
      name: 'Off-Shoulder Dress',
      amazon: { price: 1600, rating: 4.7, review: 'Feminine and elegant', image: '/Images/85.jpg' },
      flipkart: { price: 1650, rating: 4.8, review: 'Perfect for special occasions', image: '/Images/85.jpg' }
    },
86: {
      id: 86,
      name: 'Graphic Tee',
      amazon: { price: 700, rating: 4.0, review: 'Trendy and comfortable', image: '/Images/86.jpg' },
      flipkart: { price: 750, rating: 4.1, review: 'Cool design', image: '/Images/86.jpg' }
    },
87: {
      id: 87,
      name: 'Pencil Skirt',
      amazon: { price: 1100, rating: 4.3, review: 'Sophisticated and stylish', image: '/Images/87.jpg' },
      flipkart: { price: 1150, rating: 4.4, review: 'Flattering silhouette', image: '/Images/87.jpg' }
    },
88: {
      id: 88,
      name: 'Cowl Neck Sweater',
      amazon: { price: 1200, rating: 4.6, review: 'Cozy and stylish', image: '/Images/88.jpg' },
      flipkart: { price: 1250, rating: 4.7, review: 'Warm and comfortable', image: '/Images/88.jpg' }
    },
89: {
      id: 89,
      name: 'Ruffled Blouse',
      amazon: { price: 900, rating: 4.2, review: 'Feminine and chic', image: '/Images/89.jpg' },
      flipkart: { price: 950, rating: 4.3, review: 'Pretty detailing', image: '/Images/89.jpg' }
    },
90: {
      id: 90,
      name: 'Tailored Suit',
      amazon: { price: 2000, rating: 4.8, review: 'Sleek and sophisticated', image: '/Images/90.jpg' },
      flipkart: { price: 2050, rating: 4.9, review: 'Perfect fit and quality', image: '/Images/90.jpg' }
    },
    91: {
      id: 91,
      name: 'Floral Maxi Dress',
      amazon: { price: 1800, rating: 4.5, review: 'Elegant and feminine', image: '/Images/91.jpg' },
      flipkart: { price: 1850, rating: 4.6, review: 'Perfect for summer events', image: '/Images/91.jpg' }
    },
92: {
      id: 92,
      name: 'Trench Skirt',
      amazon: { price: 1500, rating: 4.3, review: 'Stylish and versatile', image: '/Images/92.jpg' },
      flipkart: { price: 1550, rating: 4.4, review: 'Great for casual outings', image: '/Images/92.jpg' }
    },
93: {
      id: 93,
      name: 'Linen Shirt',
      amazon: { price: 1000, rating: 4.2, review: 'Cool and breathable', image: '/Images/93.jpg' },
      flipkart: { price: 1050, rating: 4.3, review: 'Perfect for summer days', image: '/Images/93.jpg' }
    },
94: {
      id: 94,
      name: 'Faux Leather Jacket',
      amazon: { price: 1700, rating: 4.4, review: 'Edgy and stylish', image: '/Images/94.jpg' },
      flipkart: { price: 1750, rating: 4.5, review: 'Great for casual looks', image: '/Images/94.jpg' }
    },
95: {
      id: 95,
      name: 'Bell Sleeve Top',
      amazon: { price: 800, rating: 4.0, review: 'Trendy and fashionable', image: '/Images/95.jpg' },
      flipkart: { price: 850, rating: 4.1, review: 'Stylish and versatile', image: '/Images/95.jpg' }
    },
96: {
      id: 96,
      name: 'Wide Leg Jumpsuit',
      amazon: { price: 1900, rating: 4.7, review: 'Chic and elegant', image: '/Images/96.jpg' },
      flipkart: { price: 1950, rating: 4.8, review: 'Perfect for various occasions', image: '/Images/96.jpg' }
    },
97: {
      id: 97,
      name: 'Silk Blouse',
      amazon: { price: 1400, rating: 4.1, review: 'Luxurious and versatile', image: '/Images/97.jpg' },
      flipkart: { price: 1450, rating: 4.2, review: 'Soft and comfortable', image: '/Images/97.jpg' }
    },
98: {
      id: 98,
      name: 'Cargo Pants',
      amazon: { price: 1100, rating: 4.0, review: 'Functional and stylish', image: '/Images/98.jpg' },
      flipkart: { price: 1150, rating: 4.1, review: 'Great for outdoor activities', image: '/Images/98.jpg' }
    },
99: {
      id: 99,
      name: 'Pleated Blouse',
      amazon: { price: 900, rating: 4.3, review: 'Elegant and sophisticated', image: '/Images/99.jpg' },
      flipkart: { price: 950, rating: 4.4, review: 'Timeless wardrobe piece', image: '/Images/99.jpg' }
    },
100: {
      id: 100,
      name: 'Tweed Blazer',
      amazon: { price: 2000, rating: 4.8, review: 'Classic and refined', image: '/Images/100.jpg' },
      flipkart: { price: 2050, rating: 4.9, review: 'Versatile wardrobe staple', image: '/Images/100.jpg' }
    },
    
  };

  return products[id];
};


export default ProductComparisonPage;
