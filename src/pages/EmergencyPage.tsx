import React from 'react';
import { Phone, Shield, MapPin, AlertCircle } from 'lucide-react';

const EmergencyContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3" />
              Emergency Resources
            </h1>
            <p className="text-xl mb-6">
              Immediate help and resources for women facing unsafe situations in public transportation.
            </p>
            <div className="bg-white text-red-600 font-bold text-center py-4 rounded-lg text-xl">
              For immediate emergency assistance, call 112
            </div>
          </div>

          {/* Emergency Helplines */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <Phone className="h-6 w-6 mr-2 text-red-600" />
              Emergency Helplines
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-1 text-gray-900">National Women's Helpline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">1091</p>
                <p className="text-gray-700 text-sm">24/7 emergency assistance specifically for women in distress</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-1 text-gray-900">Police Helpline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">100</p>
                <p className="text-gray-700 text-sm">For immediate police assistance</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-1 text-gray-900">Railway Protection Force</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">9717630982</p>
                <p className="text-gray-700 text-sm">For emergencies on trains and at railway stations</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-1 text-gray-900">Delhi Metro Helpline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">155370</p>
                <p className="text-gray-700 text-sm">For emergencies on Delhi Metro</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-1 text-gray-900">Mumbai Local Train Helpline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">9833331111</p>
                <p className="text-gray-700 text-sm">For emergencies on Mumbai local trains</p>
              </div>
            </div>
          </section>

          {/* Safety Apps */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-purple-600" />
              Safety Apps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-medium mb-3 text-purple-900">Himmat+</h3>
                <p className="text-gray-700 mb-4">
                  Official safety app by Delhi Police with panic button, location tracking, and direct connection to police control room.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.14-.37.5-.25.78l1.96 3.38C3.68 11.2 1.89 14.11 1 17.48h21.99c-.97-3.44-2.83-6.4-5.39-7.99z" />
                    </svg>
                    Android
                  </a>
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.1.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.52 1.54-1.19 3.05-2.53 4.08M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    iOS
                  </a>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-medium mb-3 text-purple-900">Nirbhaya</h3>
                <p className="text-gray-700 mb-4">
                  Safety app with shake-to-activate SOS, sends alerts with location to emergency contacts and nearby police.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.14-.37.5-.25.78l1.96 3.38C3.68 11.2 1.89 14.11 1 17.48h21.99c-.97-3.44-2.83-6.4-5.39-7.99z" />
                    </svg>
                    Android
                  </a>
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.1.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.52 1.54-1.19 3.05-2.53 4.08M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    iOS
                  </a>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-medium mb-3 text-purple-900">Suraksha</h3>
                <p className="text-gray-700 mb-4">
                  Features voice-activated SOS, journey tracking, and alert system that works even in low network areas.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.14-.37.5-.25.78l1.96 3.38C3.68 11.2 1.89 14.11 1 17.48h21.99c-.97-3.44-2.83-6.4-5.39-7.99z" />
                    </svg>
                    Android
                  </a>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-medium mb-3 text-purple-900">Safetipin</h3>
                <p className="text-gray-700 mb-4">
                  App that provides safety scores for areas, safe routes, and allows users to contribute safety audits.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.14-.37.5-.25.78l1.96 3.38C3.68 11.2 1.89 14.11 1 17.48h21.99c-.97-3.44-2.83-6.4-5.39-7.99z" />
                    </svg>
                    Android
                  </a>
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.1.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.52 1.54-1.19 3.05-2.53 4.08M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    iOS
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* City-specific Resources */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-teal-600" />
              City-Specific Resources
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Delhi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Delhi Police Special Unit for Women and Children:</span> 
                      <span className="block text-teal-700">011-24673366</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Delhi Metro Police:</span> 
                      <span className="block text-teal-700">011-23417924</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Mumbai</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Mumbai Railway Police Helpline:</span> 
                      <span className="block text-teal-700">9833331111</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Mumbai Women's Helpline:</span> 
                      <span className="block text-teal-700">022-22633333</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Bangalore</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Bangalore City Police Women's Helpline:</span> 
                      <span className="block text-teal-700">1091</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Vanitha Sahayavani (Women's Helpline):</span> 
                      <span className="block text-teal-700">080-22943225</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Chennai</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Chennai City Police Women's Helpline:</span> 
                      <span className="block text-teal-700">044-28592750</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Tamil Nadu Women's Helpline:</span> 
                      <span className="block text-teal-700">181</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;