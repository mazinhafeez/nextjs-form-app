import { useState } from 'react';
import axios from 'axios';

export default function FormPage() {
  const [form, setForm] = useState({ name: '', email: '', age: '', gender: '', feedback: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/submit', form);
      setMessage('Submitted successfully');
      setForm({ name: '', email: '', age: '', gender: '', feedback: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'email', 'age', 'gender', 'feedback'].map(field => (
          <input key={field} name={field} placeholder={field} value={form[field]} onChange={handleChange} required className="border p-2 w-full" />
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}