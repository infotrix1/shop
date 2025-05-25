import React from 'react';
import { Building2, Users2, Target, Award, Globe2, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About WholeSale</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in wholesale business supplies, delivering quality products
            and exceptional service since 2020.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, WholeSale has grown from a small local supplier to a
              nationwide leader in business supplies. Our commitment to quality,
              competitive pricing, and exceptional customer service has earned us the
              trust of thousands of businesses across the country.
            </p>
            <p className="text-gray-600">
              We understand the challenges businesses face in sourcing reliable,
              cost-effective supplies. That's why we've built a comprehensive platform
              that makes wholesale purchasing simple, efficient, and affordable.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Team meeting"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We source only the highest quality products from trusted manufacturers
                and suppliers.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our success. We're dedicated to supporting your business
                growth.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Globe2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices and sustainable
                operations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10000+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">John Smith</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;