import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

const ProductListPage = () => {
  
  const Products = [
    { id: 1, name: 'Dell 15 Laptop', price: 44990, image: '/Images/1.jpg' },
    { id: 2, name: 'Lenovo IdeaPad 3', price: 33990, image: '/Images/2.jpg' },
    { id: 3, name: 'HP Laptop 15s', price: 55990, image: '/Images/3.jpg' },
    { id: 4, name: 'ASUS Vivobook 15', price: 53999, image: '/Images/4.jpg' },
    { id: 5, name: 'Samsung Galaxy Book3 ', price: 89040, image: '/Images/5.jpg' },
    { id: 6, name: 'MSI Modern 14', price: 54831, image: '/Images/6.jpg' },
    { id: 7, name: 'Apple 2023 MacBook Pro', price: 199900, image: '/Images/7.jpg' },
    { id: 8, name: 'Apple 2022 MacBook Air', price: 102990, image: '/Images/8.jpg' },
    { id: 9, name: 'Mi Notebook Horizon Edition', price: 45040, image: '/Images/9.jpg' },
    { id: 10, name: 'ASUS VivoBook 15 (2021)', price: 23999, image: '/Images/10.jpg' },
    { id: 11, name: 'Apple iPhone 15 (256 GB)', price: 80990, image: '/Images/11.jpg' },
    { id: 12, name: 'Apple iPhone 15 Pro (512 GB)', price: 158990, image: '/Images/12.jpg' },
    { id: 13, name: 'OnePlus 12', price: 69999, image: '/Images/13.jpg' },
    { id: 14, name: 'Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)', price: 10990, image: '/Images/14.jpg' },
    { id: 15, name: 'Realme narzo N53', price: 8999, image: '/Images/15.jpg' },
    { id: 16, name: 'Realme narzo 60X 5G', price: 12499, image: '/Images/16.jpg' },
    { id: 17, name: 'OnePlus Nord CE 3 Lite 5G', price: 19999, image: '/Images/17.jpg' },
    { id: 18, name: 'Redmi 13C', price: 8999, image: '/Images/18.jpg' },
    { id: 19, name: 'POCO M6 Pro 5G', price: 12999, image: '/Images/19.jpg' },
    { id: 20, name: 'iQOO Z7 Pro 5G', price: 23999, image: '/Images/20.jpg' },
    { id: 21, name: 'Noise Quad Call ', price: 1199, image: '/Images/21.jpg' },
  { id: 22, name: 'Noise ColorFit Pulse 3', price: 1399, image: '/Images/22.jpg' },
  { id: 23, name: 'boAt Flash', price: 999, image: '/Images/23.jpg' },
  { id: 24, name: 'boAt Xtend Smart Watch', price: 1199, image: '/Images/24.jpg' },
  { id: 25, name: 'Fire-Boltt Ninja Call Pro Plus', price: 1199, image: '/Images/25.jpg' },
  { id: 26, name: 'Noise ColorFit Ultra 3', price: 2799, image: '/Images/26.jpg' },
  { id: 27, name: 'TIMEX iConnect EVO+', price: 2395, image: '/Images/27.jpg' },
  { id: 28, name: 'Apple Watch SE (2nd Gen)', price: 28900, image: '/Images/28.jpg' },
  { id: 29, name: 'Apple Watch Ultra', price: 82900, image: '/Images/29.jpg' },
  { id: 30, name: 'Samsung Galaxy Watch4', price: 10999, image: '/Images/30.jpg' },
  { id: 31, name: 'LEQTRONIQ Digital Camera 4K', price: 17990, image: '/Images/31.jpg' },
  { id: 32, name: 'Fujifilm Instax Mini 11', price: 5999, image: '/Images/32.jpg' },
  { id: 33, name: 'Nikon D7500 20.9MP Digital SLR Camera', price: 93950, image: '/Images/33.jpg' },
  { id: 34, name: 'Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR', price: 78989, image: '/Images/34.jpg' },
  { id: 35, name: 'Canon EOS 1500D 24.1 Digital SLR Camera', price: 43990, image: '/Images/35.jpg' },
  { id: 36, name: 'Lenovo Tab K10 FHD|10.3 Inch', price: 13999, image: '/Images/36.jpg' },
  { id: 37, name: 'Xiaomi Pad 6', price: 27790, image: '/Images/37.jpg' },
  { id: 38, name: 'HONOR Pad X9', price: 15999, image: '/Images/38.jpg' },
  { id: 39, name: 'Samsung Galaxy Tab A9 ', price: 12704, image: '/Images/39.jpg' },
  { id: 40, name: 'Samsung Galaxy Tab S9', price: 83990, image: '/Images/40.jpg' },
  { id: 41, name: 'Ambrane Unbreakable 3A Fast Charging 1.5m ', price: 179, image: '/Images/41.jpg' },
  { id: 42, name: 'STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad', price: 99, image: '/Images/42.jpg' },
  { id: 43, name: 'Logitech B170 Wireless Mouse, 2.4 GHz ', price: 595, image: '/Images/43.jpg' },
  { id: 44, name: 'HP v236w USB 2.0 64GB Pen Drive', price: 396, image: '/Images/44.jpg' },
  { id: 45, name: 'STRIFF FLSB Laptop Stand, MacBook Stand', price: 199, image: '/Images/45.jpg' },
  { id: 46, name: 'USB C to Lightning Cable 1M', price: 664, image: '/Images/46.jpg' },
  { id: 47, name: 'American Tourister Valex 28 Ltrs Large Laptop Backpack', price: 1499, image: '/Images/47.jpg' },
  { id: 48, name: 'SanDisk Ultra Dual 64 GB USB 3.0 OTG Pen Drive ', price: 619, image: '/Images/48.jpg' },
  { id: 49, name: 'Logitech MK215 Wireless Keyboard and Mouse Combo', price: 1345, image: '/Images/49.jpg' },
  { id: 50, name: 'Logitech K480 Wireless Multi-Device Keyboard ', price: 2495, image: '/Images/50.jpg' },
  { id: 51, name: 'Chinos', price: 800, image: '/Images/51.jpg' },
  { id: 52, name: 'Formal Pants', price: 1200, image: '/Images/52.jpg' },
  { id: 53, name: 'Sneakers', price: 1800, image: '/Images/53.jpg' },
  { id: 54, name: 'T-Shirt', price: 500, image: '/Images/54.jpg' },
  { id: 55, name: 'Saree', price: 1500, image: '/Images/55.jpg' },
  { id: 56, name: 'Kurta', price: 900, image: '/Images/56.jpg' },
  { id: 57, name: 'Slippers', price: 300, image: '/Images/57.jpg' },
  { id: 58, name: 'Lehenga', price: 2000, image: '/Images/58.jpg' },
  { id: 59, name: 'Crop Top', price: 700, image: '/Images/59.jpg' },
  { id: 60, name: 'Shoes', price: 1700, image: '/Images/60.jpg' },
  { id: 61, name: 'Denim Jeans', price: 1500, image: '/Images/61.jpg' },
  { id: 62, name: 'Hoodie', price: 1200, image: '/Images/62.jpg' },
  { id: 63, name: 'Maxi Dress', price: 1800, image: '/Images/63.jpg' },
  { id: 64, name: 'Blazer', price: 2000, image: '/Images/64.jpg' },
  { id: 65, name: 'Jumpsuit', price: 1600, image: '/Images/65.jpg' },
  { id: 66, name: 'Polo Shirt', price: 1000, image: '/Images/66.jpg' },
  { id: 67, name: 'Palazzo Pants', price: 850, image: '/Images/67.jpg' },
  { id: 68, name: 'Anarkali Suit', price: 1900, image: '/Images/68.jpg' },
  { id: 69, name: 'Harem Pants', price: 700, image: '/Images/69.jpg' },
  { id: 70, name: 'Trench Coat', price: 2000, image: '/Images/70.jpg' },
  { id: 71, name: 'Crop Flare Jeans', price: 1400, image: '/Images/71.jpg' },
  { id: 72, name: 'Turtleneck Sweater', price: 1100, image: '/Images/72.jpg' },
  { id: 73, name: 'Pleated Skirt', price: 900, image: '/Images/73.jpg' },
  { id: 74, name: 'Tunic Top', price: 750, image: '/Images/74.jpg' },
  { id: 75, name: 'Midi Dress', price: 1700, image: '/Images/75.jpg' },
  { id: 76, name: 'Denim Jacket', price: 1600, image: '/Images/76.jpg' },
  { id: 77, name: 'Pullover Hoodie', price: 1300, image: '/Images/77.jpg' },
  { id: 78, name: 'High-Waisted Jeans', price: 1200, image: '/Images/78.jpg' },
  { id: 79, name: 'Wrap Dress', price: 1800, image: '/Images/79.jpg' },
  { id: 80, name: 'Oversized Sweater', price: 1500, image: '/Images/80.jpg' },
  { id: 81, name: 'Boat Neck Top', price: 600, image: '/Images/81.jpg' },
  { id: 82, name: 'Cropped Wide-Leg Pants', price: 850, image: '/Images/82.jpg' },
  { id: 83, name: 'Bomber Jacket', price: 1300, image: '/Images/83.jpg' },
  { id: 84, name: 'Denim Skirt', price: 950, image: '/Images/84.jpg' },
  { id: 85, name: 'Off-Shoulder Dress', price: 1600, image: '/Images/85.jpg' },
  { id: 86, name: 'Graphic Tee', price: 700, image: '/Images/86.jpg' },
  { id: 87, name: 'Pencil Skirt', price: 1100, image: '/Images/87.jpg' },
  { id: 88, name: 'Cowl Neck Sweater', price: 1200, image: '/Images/88.jpg' },
  { id: 89, name: 'Ruffled Blouse', price: 900, image: '/Images/89.jpg' },
  { id: 90, name: 'Tailored Suit', price: 2000, image: '/Images/90.jpg' },
  { id: 91, name: 'Floral Maxi Dress', price: 1800, image: '/Images/91.jpg' },
  { id: 92, name: 'Trench Skirt', price: 1500, image: '/Images/92.jpg' },
  { id: 93, name: 'Linen Shirt', price: 1000, image: '/Images/93.jpg' },
  { id: 94, name: 'Faux Leather Jacket', price: 1700, image: '/Images/94.jpg' },
  { id: 95, name: 'Bell Sleeve Top', price: 800, image: '/Images/95.jpg' },
  { id: 96, name: 'Wide Leg Jumpsuit', price: 1900, image: '/Images/96.jpg' },
  { id: 97, name: 'Silk Blouse', price: 1400, image: '/Images/97.jpg' },
  { id: 98, name: 'Cargo Pants', price: 1100, image: '/Images/98.jpg' },
  { id: 99, name: 'Pleated Blouse', price: 900, image: '/Images/99.jpg' },
  { id: 100, name: 'Tweed Blazer', price: 2000, image: '/Images/100.jpg' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('priceHighToLow');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : Products.filter(
          product => product.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
    <div>
      <Link to={`/shopping/compare/${suggestion.id}`}>
        {suggestion.name} - ₹{suggestion.price}
      </Link>
    </div>
  );

  const inputProps = {
    placeholder: 'Search for dining products...',
    value: searchTerm,
    onChange: onChange,
    className: 'p-2 border border-gray-300 rounded-md w-full'
  };

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {/* Search bar */}
      <div className="mb-4">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>

      {/* Filter options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link to={`/shopping/compare/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md hover:opacity-75 transition duration-300 ease-in-out"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700">₹{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
