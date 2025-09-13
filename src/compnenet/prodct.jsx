import React from "react";

const products = [
  {
    id: 1,
    name: "Hard Disk",
    price: "$50",
    description: "High-speed 1TB hard disk for your PC.",
    image: "https://5.imimg.com/data5/TL/OV/MY-33838980/hard-disk-500x500.jpg", // replace with real images
  },
  {
    id: 2,
    name: "RAM",
    price: "$80",
    description: "16GB DDR4 RAM for fast performance.",
    image: "https://www.computerhope.com/jargon/m/memory-ddr4.png",
  },
  {
    id: 3,
    name: "CPU",
    price: "$250",
    description: "High-performance CPU for gaming and work.",
    image: "https://rukminim2.flixcart.com/image/704/844/k3rmm4w0/cpu/d/c/y/edgei3-cpu-original-imafmt66hrke6pbz.jpeg?q=90&crop=false",
  },
  {
    id: 4,
    name: "GPU",
    price: "$400",
    description: "Graphics card for smooth gaming and rendering.",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:1024,ch:576,q:80,w:1024/R6zbNW4EyUFXHdD4Laq8tb.jpg",
  },
];

const Products = () => {
  const handleBuy = (product) => {
    alert(`You clicked Buy for ${product.name} at ${product.price}`);
    // You can replace this with actual payment logic
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <button
                onClick={() => handleBuy(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
