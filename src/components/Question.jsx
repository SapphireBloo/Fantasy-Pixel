// src/components/Question.jsx
export default function Question({ id, text, onAnswer }) {
  const handleChange = (e) => {
    onAnswer(id, e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{text}</label>
      <input
        type="text"
        placeholder="Type your answer..."
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
