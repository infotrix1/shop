import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Office Manager',
    company: 'Tech Dynamics',
    comment: 'WholeSale has been our go-to supplier for office equipment for over 2 years. Their prices are competitive and the quality is consistently excellent.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Roberts',
    position: 'Procurement Manager',
    company: 'Global Solutions',
    comment: 'I appreciate the wide selection of products and the bulk discounts. The customer service is top-notch and they always deliver on time.',
    rating: 4,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Jennifer Chen',
    position: 'Small Business Owner',
    company: 'Artisan Crafts',
    comment: 'As a small business owner, finding reliable suppliers with fair prices is essential. WholeSale has exceeded my expectations in every way.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-2 text-lg text-gray-600">Trusted by businesses of all sizes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">Join our growing community of satisfied customers</p>
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};