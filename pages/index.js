import { useState } from 'react';
import axios from 'axios';

export default function FormPage() {
  const [form, setForm] = useState({ name: '', email: '', age: '', gender: '', feedback: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://form-app-backend.onrender.com/api/submit', form);
      setMessage('✅ Submitted successfully');
      setForm({ name: '', email: '', age: '', gender: '', feedback: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || '❌ Submission failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Submit Your Info</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'age', 'gender', 'feedback'].map(field => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded">
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
  );
}
