// src/components/UserForm.jsx
import { useState } from 'react';

export default function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${name}! Your results are ready.`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Submit
      </button>
    </form>
  );
}