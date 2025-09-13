import React from 'react';
import { FaNetworkWired, FaCloud, FaTools, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Network Setup",
    description: "We design and implement secure, high-performance networks.",
    icon: <FaNetworkWired className="text-4xl text-blue-500 mb-4" />,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud integration and migration services.",
    icon: <FaCloud className="text-4xl text-purple-500 mb-4" />,
  },
  {
    title: "Technical Support",
    description: "24/7 support to keep your business running smoothly.",
    icon: <FaTools className="text-4xl text-green-500 mb-4" />,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business from threats with top-notch security.",
    icon: <FaLock className="text-4xl text-red-500 mb-4" />,
  },
];

const ITServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our IT Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
         <Link to='/contact' >   <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
         <p className='text-center flex justify-center'>     {service.icon} </p>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div> </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServices;
