import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

const DiningListPage = () => {
  // Dummy dining product data (replace this with your actual data)
  const diningProducts = [
    { id: 101, name: 'Butter Chicken', price: 876, image: '/Images/D101.jpg' },
    { id: 102, name: 'Chicken Tikka Masala', price: 409, image: '/Images/D102.jpg' },
    { id: 103, name: 'Tandoori Chicken', price: 522, image: '/Images/D103.jpg' },
    { id: 104, name: 'Rogan Josh', price: 709, image: '/Images/D104.jpg' },
    { id: 105, name: 'Chicken Biryani', price: 312, image: '/Images/D105.jpg' },
    { id: 106, name: 'Mutton Biryani', price: 899, image: '/Images/D106.jpg' },
    { id: 107, name: 'Fish Curry', price: 679, image: '/Images/D107.jpg' },
    { id: 108, name: 'Goan Prawn Curry', price: 790, image: '/Images/D108.jpg' },
    { id: 109, name: 'Hyderabadi Dum Biryani', price: 345, image: '/Images/D109.jpg' },
    { id: 110, name: 'Chicken Korma', price: 489, image: '/Images/D110.jpg' },
    { id: 111, name: 'Chicken Curry', price: 901, image: '/Images/D111.jpg' },
    { id: 112, name: 'Lamb Korma', price: 779, image: '/Images/D112.jpg' },
    { id: 113, name: 'Keema Curry', price: 666, image: '/Images/D113.jpg' },
    { id: 114, name: 'Tandoori Fish Tikka', price: 235, image: '/Images/D114.jpg' },
    { id: 115, name: 'Malabar Fish Curry', price: 578, image: '/Images/D115.jpg' },
    { id: 116, name: 'Chettinad Chicken Curry', price: 432, image: '/Images/D116.jpg' },
    { id: 117, name: 'Chicken Chettinad', price: 467, image: '/Images/D117.jpg' },
    { id: 118, name: 'Kerala Fish Curry', price: 789, image: '/Images/D118.jpg' },
    { id: 119, name: 'Fish Tandoori', price: 644, image: '/Images/D119.jpg' },
    { id: 120, name: 'Mutton Rogan Josh', price: 567, image: '/Images/D120.jpg' },
    { id: 121, name: 'Chicken 65', price: 312, image: '/Images/D121.jpg' },
    { id: 122, name: 'Mutton Do Pyaza', price: 789, image: '/Images/D122.jpg' },
    { id: 123, name: 'Hyderabadi Chicken Biryani', price: 777, image: '/Images/D123.jpg' },
    { id: 124, name: 'Kerala Chicken Curry', price: 765, image: '/Images/D124.jpg' },
    { id: 125, name: 'Bengali Fish Curry', price: 589, image: '/Images/D125.jpg' },
    { id: 126, name: 'Mutton Curry', price: 435, image: '/Images/D126.jpg' },
    { id: 127, name: 'Chicken Reshmi Kebab', price: 899, image: '/Images/D127.jpg' },
    { id: 128, name: 'Mutton Seekh Kebab', price: 743, image: '/Images/D128.jpg' },
    { id: 129, name: 'Fish Curry', price: 812, image: '/Images/D129.jpg' },
    { id: 130, name: 'Goan Prawn Curry', price: 344, image: '/Images/D130.jpg' },
    { id: 131, name: 'Chicken Vindaloo', price: 645, image: '/Images/D131.jpg' },
    { id: 132, name: 'Goan Fish Curry', price: 789, image: '/Images/D132.jpg' },
    { id: 133, name: 'Chicken Kolhapuri', price: 467, image: '/Images/D133.jpg' },
    { id: 134, name: 'Mutton Kheema', price: 900, image: '/Images/D134.jpg' },
    { id: 135, name: 'Tawa Fish Fry', price: 422, image: '/Images/D135.jpg' },
    { id: 136, name: 'Chicken Handi', price: 533, image: '/Images/D136.jpg' },
    { id: 137, name: 'Mutton Handi', price: 267, image: '/Images/D137.jpg' },
    { id: 138, name: 'Chicken Shahi Korma', price: 579, image: '/Images/D138.jpg' },
    { id: 139, name: 'Hyderabadi Mutton Biryani', price: 678, image: '/Images/D139.jpg' },
    { id: 140, name: 'Chicken Tandoori', price: 812, image: '/Images/D140.jpg' },
    { id: 141, name: 'Chilli Chicken', price: 456, image: '/Images/D141.jpg' },
    { id: 142, name: 'Fish Pakora', price: 567, image: '/Images/D142.jpg' },
    { id: 143, name: 'Chicken Hariyali Tikka', price: 234, image: '/Images/D143.jpg' },
    { id: 144, name: 'Chicken Malai Tikka', price: 743, image: '/Images/D144.jpg' },
    { id: 145, name: 'Mutton Kofta', price: 789, image: '/Images/D145.jpg' },
    { id: 146, name: 'Prawn Biryani', price: 890, image: '/Images/D146.jpg' },
    { id: 147, name: 'Mutton Biryani (Lucknowi)', price: 555, image: '/Images/D147.jpg' },
    { id: 148, name: 'Amritsari Fish Tikka', price: 333, image: '/Images/D148.jpg' },
    { id: 149, name: 'Bengali Mutton Curry (Kosha Mangsho)', price: 444, image: '/Images/D149.jpg' },
    { id: 150, name: 'Chicken Handi', price: 789, image: '/Images/D150.jpg' },
    { id: 151, name: 'Singapore Mei Fun', price: 746, image: '/Images/d151.jpeg' },
    { id: 152, name: 'Scallion Pancakes with Dim Sum Dipper', price: 333, image: '/Images/d152.jpeg' },
    { id: 153, name: 'Takeout-style Air Fryer Egg Rolls', price: 789, image: '/Images/d153.jpeg' },
    { id: 154, name: 'Char Siu', price: 901, image: '/Images/d154.jpeg' },
    { id: 155, name: 'Char Siu Bao', price: 467, image: '/Images/d155.jpeg' },
    { id: 156, name: 'Pork Soup Dumplings', price: 777, image: '/Images/d156.jpeg' },
    { id: 157, name: 'Wontons in Chili Oil', price: 812, image: '/Images/d157.jpeg' },
    { id: 158, name: 'Bo Zai Fan (Clay Pot Rice)', price: 578, image: '/Images/d158.jpeg' },
    { id: 159, name: 'Braised Eggplant with Tofu and Shiitake Mushrooms in a Clay Pot', price: 789, image: '/Images/d159.jpeg' },
    { id: 160, name: 'Hong Kong-Style Macaroni Soup', price: 312, image: '/Images/d160.jpeg' },
    { id: 161, name: 'Tomato and Egg with Rice', price: 589, image: '/Images/d161.jpeg' },
    { id: 162, name: 'Salted Pork Congee with Century Egg', price: 512, image: '/Images/d162.jpeg' },
    { id: 163, name: 'Tang Jai Jook', price: 777, image: '/Images/d163.jpeg' },
    { id: 164, name: 'Tanghulu', price: 467, image: '/Images/d164.jpeg' },
    { id: 165, name: 'Crispy Stuffed Lotus Root with Pork', price: 899, image: '/Images/d165.jpeg' },
    { id: 166, name: 'Salt and Pepper Tofu', price: 578, image: '/Images/d166.jpeg' },
    { id: 167, name: 'Smashed Cucumber Salad', price: 322, image: '/Images/d167.jpeg' },
    { id: 168, name: 'Drunken Chicken', price: 555, image: '/Images/d168.jpeg' },
    { id: 169, name: 'Sweet and Sour Pork', price: 666, image: '/Images/d169.jpeg' },
    { id: 170, name: 'Dumplings with a Crispy Skirt', price: 789, image: '/Images/d170.jpeg' },
    { id: 171, name: 'Chicken Pot Stickers with Dipping Sauce', price: 512, image: '/Images/d171.jpeg' },
    { id: 172, name: 'Hot Pot at Home', price: 789, image: '/Images/d172.jpeg' },
    { id: 173, name: 'Hong Kong Egg Tarts', price: 578, image: '/Images/d173.jpeg' },
    { id: 174, name: 'Hong Dou Tang', price: 678, image: '/Images/d174.jpeg' },
    { id: 175, name: 'Sweet Potato Tapioca Dessert Soup', price: 789, image: '/Images/d175.jpeg' },
    { id: 176, name: 'Hong Kong-Style Condensed Milk Toast', price: 456, image: '/Images/d176.jpeg' },
    { id: 177, name: 'Nian Gao', price: 567, image: '/Images/d177.jpeg' },
    { id: 178, name: 'Grandma\'s Tepong Pork', price: 765, image: '/Images/d178.jpeg' },
    { id: 179, name: 'Shanghai Red-Braised Pork with Eggs', price: 589, image: '/Images/d179.jpeg' },
    { id: 180, name: 'Orange Chicken', price: 678, image: '/Images/d180.jpeg' },
    { id: 181, name: 'Pressed Sliced Tofu Salad', price: 512, image: '/Images/d181.jpeg' },
    { id: 182, name: 'Buddha\'s Delight', price: 789, image: '/Images/d182.jpeg' },
    { id: 183, name: 'Mapo Tofu', price: 789, image: '/Images/d183.jpeg' },
    { id: 184, name: 'Mushroom Mapo Tofu', price: 512, image: '/Images/d184.jpeg' },
    { id: 185, name: 'The Best Pork Fried Rice', price: 789, image: '/Images/d185.jpeg' },
    { id: 186, name: 'Classic Lo Mein', price: 512, image: '/Images/d186.jpeg' },
    { id: 187, name: 'Tea Eggs', price: 678, image: '/Images/d187.jpeg' },
    { id: 188, name: 'Tangyuan with Peanut Filling', price: 345, image: '/Images/d188.jpeg' },
    { id: 189, name: 'Ba Bao Fan', price: 789, image: '/Images/d189.jpeg' },
    { id: 190, name: 'Chinese Almond Cookies', price: 567, image: '/Images/d190.jpeg' },
    { id: 191, name: 'Fa Gao', price: 789, image: '/Images/d191.jpeg' },
    { id: 192, name: 'Dan-Dan Noodles', price: 512, image: '/Images/d192.jpeg' },
    { id: 193, name: 'Dan Dan Mian', price: 678, image: '/Images/d193.jpeg' },
    { id: 194, name: 'Chili Oil', price: 789, image: '/Images/d194.jpeg' },
    { id: 195, name: 'Easy Stir-Fry Sauce', price: 512, image: '/Images/d195.jpeg' },
    { id: 196, name: 'Scallion-Ginger Sauce', price: 789, image: '/Images/d196.jpeg' },
    { id: 197, name: 'Bai Qie Ji (White Cut Chicken)', price: 678, image: '/Images/d197.jpeg' },
    { id: 198, name: 'Soy Sauce Chicken (See Yao Gai)', price: 789, image: '/Images/d198.jpeg' },
    { id: 199, name: 'Crisp Seaweed with Peanuts', price: 512, image: '/Images/d199.jpeg' },
    { id: 200, name: 'Chinese Milk Bread', price: 789, image: '/Images/d200.jpeg' }

    
    
    
    // Add more dining products
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
      : diningProducts.filter(
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
      <Link to={`/dining/compare/${suggestion.id}`}>
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

  const filteredProducts = diningProducts.filter(product =>
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
      <h2 className="text-2xl font-semibold mb-4">Dining Products</h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link to={`/dining/compare/${product.id}`} className="block">
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

export default DiningListPage;
