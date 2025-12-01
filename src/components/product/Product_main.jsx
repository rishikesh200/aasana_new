import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Product_main = () => {
  const [productsData, setProductsData] = useState({
    title: 'Discover Your Nutrition Essentials',
    products: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/product/main');
        if (res.data) {
          setProductsData({
            title: res.data.title || 'Discover Your Nutrition Essentials',
            products: res.data.products || [],
          });
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Set default data if API fails
        setProductsData({
          title: 'Discover Your Nutrition Essentials',
          products: [
            {
              label: 'Product 1',
              title: 'Probiotic Daily Capsules',
              description: 'A powerful blend of beneficial bacteria strains that help restore gut flora balance. Promotes healthy digestion, supports immune function, and reduces occasional bloating. Perfect for daily use to maintain overall gut wellness.',
              price: '$29.99',
              image: '',
              imageAlt: 'Probiotic Daily Capsules',
            },
            {
              label: 'Product 2',
              title: 'Digestive Enzyme Complex',
              description: 'Contains a carefully formulated mix of enzymes to break down proteins, fats, and carbohydrates efficiently. Helps reduce indigestion, gas, and bloating while improving nutrient absorption for better energy levels.',
              price: '$29.99',
              image: '',
              imageAlt: 'Digestive Enzyme Complex',
            },
            {
              label: 'Product 3',
              title: 'Prebiotic Fiber Powder',
              description: 'A high-quality prebiotic fiber that nourishes beneficial gut bacteria, supporting a healthy digestive system. Helps regulate bowel movements, reduce bloating, and promote long-term gut health. Can be mixed easily into smoothies or water.',
              price: '$29.99',
              image: '',
              imageAlt: 'Prebiotic Fiber Powder',
            },
          ],
        });
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[Raleway] font-semibold text-center mb-12 md:mb-16 text-gray-800">
          {productsData.title}
        </h2>

        {/* Products List */}
        <div className="space-y-8 md:space-y-12">
          {productsData.products.map((product, index) => {
            // Alternate layout: even index (0, 2, 4...) = image left, odd index (1, 3, 5...) = image right
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="bg-[#FEF6F6] rounded-2xl shadow-lg overflow-hidden p-6 md:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-8 items-center ${
                    isImageLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.imageAlt || product.title}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Product Label */}
                    {product.label && (
                      <p className="text-sm md:text-base font-[Raleway] text-gray-600 mb-2">
                        {product.label}
                      </p>
                    )}

                    {/* Product Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-[Raleway] font-semibold mb-4 text-[#EC7979]">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg font-[Raleway] text-gray-700 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-base md:text-lg font-[Raleway] text-gray-700">
                        Price:{' '}
                      </span>
                      <span className="text-lg md:text-xl font-[Raleway] font-semibold text-green-600">
                        {product.price}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <button className="bg-[#EC7979] text-white py-3 px-8 rounded-4xl cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-base md:text-lg font-[Raleway]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product_main;

