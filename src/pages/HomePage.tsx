import React from 'react';
import { ArrowRight, AlertCircle, FileText, Map, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-center bg-cover"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/8988697/pexels-photo-8988697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ensuring Women's Safety in Public Transport
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Exploring challenges and solutions for women's safety on public transportation systems in Indian metro cities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/research" 
                className="bg-white text-purple-900 hover:bg-purple-100 px-6 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                View Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/emergency" 
                className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                Emergency Resources <AlertCircle className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">The Current Situation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              number="71%" 
              description="of women feel unsafe using public transport at night in major Indian cities"
              color="bg-purple-50"
              textColor="text-purple-700"
            />
            <StatsCard 
              number="56%" 
              description="of women have experienced harassment while using public transportation"
              color="bg-red-50"
              textColor="text-red-700"
            />
            <StatsCard 
              number="38%" 
              description="reduction in women's mobility due to safety concerns"
              color="bg-orange-50"
              textColor="text-orange-700"
            />
            <StatsCard 
              number="42%" 
              description="of women have altered their routes to avoid unsafe transport options"
              color="bg-teal-50"
              textColor="text-teal-700"
            />
          </div>
        </div>
      </section>

      {/* Core Problem Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Key Focus Areas</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Our research identifies these critical challenges that must be addressed to improve women's safety in public transport.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Map className="text-purple-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Infrastructure Gaps</h3>
              <p className="text-gray-600">
                Poor lighting, unsafe waiting areas, and inadequate last-mile connectivity create vulnerability points for women commuters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="text-teal-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Policy Implementation</h3>
              <p className="text-gray-600">
                Despite safety policies on paper, weak implementation and monitoring lead to persistent safety issues across transit systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="text-pink-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Social Attitudes</h3>
              <p className="text-gray-600">
                Entrenched social norms and behaviors perpetuate harassment and create hostile environments for women in transit spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Women's Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I take the metro to work every day, but after 8 PM, I always book a cab because the connecting bus route feels too unsafe."
              name="Priya S."
              city="Delhi"
            />
            <TestimonialCard 
              quote="I've had to change my job twice because of harassment issues on the route. Safe transport is not a luxury, it's a necessity."
              name="Meera K."
              city="Mumbai"
            />
            <TestimonialCard 
              quote="The women's compartment in trains helps, but what about the walk from the station to home? That's where I feel most vulnerable."
              name="Anjali R."
              city="Bangalore"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Initiative</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
            Explore our research, systems analysis, and resources to understand the complex factors affecting women's safety in public transport.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/research" 
              className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Research Findings
            </Link>
            <Link 
              to="/systems-analysis" 
              className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              See Systems Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;