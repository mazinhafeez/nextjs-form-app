import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DataPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('https://express-form-api.onrender.com/api/data').then(res => setEntries(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Submitted Entries</h1>
        <div className="overflow-auto">
          <table className="w-full border border-gray-200 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>{['Name', 'Email', 'Age', 'Gender', 'Feedback'].map(h => <th key={h} className="border px-4 py-2">{h}</th>)}</tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={i} className="even:bg-gray-50">
                  {Object.values(entry).map((val, j) => <td key={j} className="border px-4 py-2">{val}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
