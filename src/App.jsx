import { useState } from 'react';

const CAMP_TYPES = [
  { id: 'adventure', title: 'Outdoor Adventure', icon: 'ri-compass-3-fill', bg: 'bg-orange-100', text: 'text-orange-600' },
  { id: 'water', title: 'Water Sports', icon: 'ri-sailboat-fill', bg: 'bg-blue-100', text: 'text-blue-600' },
  { id: 'team', title: 'Team Sports', icon: 'ri-basketball-fill', bg: 'bg-red-100', text: 'text-red-600' },
  { id: 'tech', title: 'Sports Tech', icon: 'ri-rocket-2-fill', bg: 'bg-purple-100', text: 'text-purple-600' }
];

function App() {
  const [view, setView] = useState('landing'); // landing, form, success
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    campType: '',
    week: 'week1'
  });

  const handleStart = () => setView('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate loading
    setTimeout(() => setView('success'), 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCamp = (id) => {
    setFormData({ ...formData, campType: id });
  };

  // --- Views ---

  return (
    <>
      {/* Decorative Background Elements */}
      <div className="fixed top-10 right-10 text-sun-400 opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }}>
        <i className="ri-sun-fill text-9xl"></i>
      </div>
      <div className="fixed top-1/4 left-10 text-sky-200 opacity-40 animate-float">
        <i className="ri-cloud-fill text-8xl"></i>
      </div>
      <div className="fixed bottom-10 right-1/4 text-sky-200 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
        <i className="ri-cloud-fill text-6xl"></i>
      </div>

      {/* Main Content */}
      {view === 'success' && (
        <div className="min-h-[80vh] flex items-center justify-center relative z-10 p-4">
          <div className="bg-white rounded-[2rem] p-12 max-w-md w-full shadow-float text-center transform transition-all animate-bounce-slow">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-double-line text-5xl text-green-500"></i>
            </div>
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-2">Yay! All Set!</h2>
            <p className="text-gray-500 mb-8">
              Thanks for enrolling <strong>{formData.childName}</strong>! <br />
              Pack your bags for an amazing summer.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200"
            >
              Send Another Camper
            </button>
          </div>
        </div>
      )}

      {view === 'landing' && (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10 md:mt-20 relative z-10 p-4">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-2 bg-sun-100 text-sun-600 rounded-full font-bold text-sm tracking-wide">
              ☀️ REGISTRATIONS OPEN FOR 2026
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Make This Summer <br />
              <span className="text-sky-500">Unforgettable</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed mx-auto md:mx-0">
              Join 500+ happy campers for sports, friendship, and fun in the sun. Ages 6-16.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={handleStart} className="px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-sky-200 hover:transform hover:-translate-y-1 transition-all">
                Enroll Now
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-200 transition-colors">
                View Schedule
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* Hero Image / Graphic made with CSS/Icons */}
            <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-float transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-orange-100 rounded-2xl flex items-center justify-center">
                  <i className="ri-basketball-line text-6xl text-orange-400"></i>
                </div>
                <div className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center">
                  <i className="ri-swimming-ball-fill text-6xl text-blue-400"></i>
                </div>
                <div className="aspect-square bg-green-100 rounded-2xl flex items-center justify-center">
                  <i className="ri-football-line text-6xl text-green-400"></i>
                </div>
                <div className="aspect-square bg-purple-100 rounded-2xl flex items-center justify-center">
                  <i className="ri-trophy-line text-6xl text-purple-400"></i>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500 overflow-hidden">
                      <i className="ri-user-smile-line"></i>
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-600">Join the fun!</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'form' && (
        <div className="max-w-2xl mx-auto mt-10 relative z-10 p-4">
          <button onClick={() => setView('landing')} className="mb-6 text-gray-500 hover:text-sky-600 flex items-center gap-2 font-bold">
            <i className="ri-arrow-left-line"></i> Back to Home
          </button>

          <div className="bg-white rounded-[2rem] shadow-card overflow-hidden">
            <div className="bg-sky-500 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-heading text-3xl font-bold">Camper Enrollment</h2>
                <p className="opacity-90">Let's get you signed up for 2025.</p>
              </div>
              <i className="ri-sun-fill absolute -bottom-10 -right-10 text-9xl opacity-20 rotate-45"></i>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                  <input
                    required
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 ring-sky-200 outline-none transition-all font-bold text-gray-700"
                    placeholder="Alex Johnson"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name</label>
                  <input
                    required
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 ring-sky-200 outline-none transition-all font-bold text-gray-700"
                    placeholder="Sammy Johnson"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">Choose Your Adventure</label>
                <div className="grid grid-cols-2 gap-4">
                  {CAMP_TYPES.map(type => (
                    <div
                      key={type.id}
                      onClick={() => selectCamp(type.id)}
                      className={`p-4 rounded-xl cursor-pointer border-2 transition-all flex items-center gap-3 ${formData.campType === type.id ? 'border-sky-500 bg-sky-50' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type.bg} ${type.text}`}>
                        <i className={`${type.icon} text-lg`}></i>
                      </div>
                      <span className="font-bold text-gray-700 text-sm">{type.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Age</label>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 ring-sky-200 outline-none font-bold text-gray-700"
                  >
                    <option value="">Select Age</option>
                    {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(a => <option key={a} value={a}>{a} Years Old</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Session Week</label>
                  <select
                    name="week"
                    value={formData.week}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 ring-sky-200 outline-none font-bold text-gray-700"
                  >
                    <option value="week1">Week 1: June 1st</option>
                    <option value="week2">Week 2: June 15th</option>
                    <option value="week3">Week 3: July 1st</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-200 transition-all transform active:scale-95 text-lg">
                Complete Registration
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
