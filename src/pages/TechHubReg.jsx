import React, { useState } from 'react';
import course from '../assets/online-learning.png';
import duration from '../assets/clock.svg';
import learn from '../assets/learn.svg';
import price from '../assets/price.svg';
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

function TechHubReg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Beg'); // Default to Beginner
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phonenumber || !state || !message) {
      setFeedback({ type: 'error', message: 'All fields are required!' });
      return;
    }

    setLoading(true);
    setFeedback({ type: '', message: '' });

    const formData = { name, email, phonenumber, state, message, program: selectedProgram };

    try {
      const response = await fetch('http://localhost:5000/send-registration-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFeedback({ type: 'success', message: 'Your message has been sent successfully!' });
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setPhoneNumber('');
        setState('');
        setMessage('');
        setSelectedProgram('Beg'); // Reset the selected program to default (Beginner)
      } else {
        setFeedback({ type: 'error', message: 'There was an issue sending your message.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedback({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const programDetails = {
    Beg: {
      title: 'Beginner',
      description: 'Write Your First Line Of Code.',
      duration: '6 weeks (3 hours daily, Tuesday, Wednesday, Thursday)',
      format: 'In-person (on-site)',
      courseOutline: 'Key topics include foundational knowledge, hands-on projects, and real-world case studies.',
      learningOutcomes: 'By the end of the program, participants will be ready for the next step in their careers.',
      price: '150,000',
    },
    Int: {
      title: 'Intermediate',
      description: 'Build More Complex Projects.',
      duration: '8 weeks (3 hours daily, Tuesday, Wednesday, Thursday)',
      format: 'In-person (on-site)',
      courseOutline: 'Key topics include advanced programming techniques and larger-scale projects.',
      learningOutcomes: 'By the end of the program, participants will be proficient in advanced skills and problem-solving.',
      price: '200,000',
    },
    Pro: {
      title: 'Professional',
      description: 'Master Your Skills for Career Growth.',
      duration: '10 weeks (3 hours daily, Monday, Wednesday, Friday)',
      format: 'In-person (on-site)',
      courseOutline: 'Key topics include industry-level projects, professional development, and team collaboration.',
      learningOutcomes: 'Participants will be prepared for high-level roles in their field.',
      price: '250,000',
    },
  };

  return (
    <div className="bg-black">
      <div className="text-white text-center mt-44">
        <h1 className="font-bold text-3xl">Register Below</h1>
        <p className="mt-4">Each of our programs ensures you gain hands-on experience and practical knowledge.</p>
      </div>

      <h5 className="text-white font-semibold text-center mt-11">Choose Your Level</h5>
      <div className="p-4 text-white flex justify-center gap-4 mx-auto mt-5 w-fit border border-gray bg-[#151515] rounded-full">
        <div className="hover:border-b-2 cursor-pointer" onClick={() => setSelectedProgram('Beg')}>Beginner</div>
        <div className="hover:border-b-2 cursor-pointer" onClick={() => setSelectedProgram('Int')}>Intermediate</div>
        <div className="hover:border-b-2 cursor-pointer" onClick={() => setSelectedProgram('Pro')}>Professional</div>
      </div>

      <div className="mt-10 mb-0 flex md:flex-row items-stretch bg-black text-white mx-10 md:mx-44 border rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 md:w-1/2 bg-gray-900 rounded-l-xl border border-gray-500">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Program Details</h2>
          <h1 className="text-3xl font-bold mb-4">{programDetails[selectedProgram].title}</h1>
          <p className="mb-6 font-semibold">{programDetails[selectedProgram].description}</p>
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={duration} alt="Duration" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Duration</p>
                <p>{programDetails[selectedProgram].duration}</p>
              </div>
            </div>
            <div className="flex items-center">
              <HiMiniBuildingOffice2 className="text-2xl mr-4" />
              <div>
                <p className="font-bold">Format</p>
                <p>{programDetails[selectedProgram].format}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={course} alt="Course Outline" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Course Outline</p>
                <p>{programDetails[selectedProgram].courseOutline}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={learn} alt="Learning Outcomes" className="bg-white w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Learning Outcomes</p>
                <p>{programDetails[selectedProgram].learningOutcomes}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={price} alt="Price" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Price</p>
                <p>{programDetails[selectedProgram].price}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white text-black md:w-1/2 rounded-r-xl">
          <h2 className="text-lg font-bold mb-4">Register Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border rounded-lg p-3" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="E-Mail" className="w-full border rounded-lg p-3" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-3" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type="text" placeholder="State" className="w-full border rounded-lg p-3" value={state} onChange={(e) => setState(e.target.value)} />
            <textarea placeholder="Your Message Here" className="w-full border rounded-lg p-3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600">{loading ? 'Sending...' : 'Send Message'}</button>
          </form>
          {feedback.message && (
            <div className={`mt-4 p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechHubReg;
