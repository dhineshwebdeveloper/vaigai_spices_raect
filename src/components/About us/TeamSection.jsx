import React from 'react';
import team1 from '../../assets/images/ceo1.jpg'; // Replace with actual images
import team2 from '../../assets/images/ceo2.jpg';
import team3 from '../../assets/images/ceo3.jpg';

const teamMembers = [
  {
    name: 'Ravi Kumar',
    role: 'Founder & CEO',
    image: team1,
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image: team2,
  },
  {
    name: 'Manoj Patel',
    role: 'Chief Quality Officer',
    image: team3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F9FFF5]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4 animate-fade-up">
          Meet Our Leadership
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12 animate-fade-up">
          Behind Vaigai Spices is a passionate team of leaders committed to flavor innovation, transparency, and excellence.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 animate-fade-up">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-green-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
