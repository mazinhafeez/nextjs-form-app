import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DataPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('https://form-app-backend.onrender.com/api/data').then(res => setEntries(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submitted Entries</h1>
      <table className="w-full border">
        <thead><tr>{['Name', 'Email', 'Age', 'Gender', 'Feedback'].map(h => <th key={h} className="border px-2">{h}</th>)}</tr></thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i}>{Object.values(entry).map((val, j) => <td key={j} className="border px-2">{val}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
