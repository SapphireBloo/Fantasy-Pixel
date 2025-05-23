// src/components/Home.jsx
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Pixel Character Picker!</h1>
        <p>Start your journey by clicking the button below.</p>
        <a href="/quiz" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Start Quiz</a>
      </main>
    </div>
  );
}