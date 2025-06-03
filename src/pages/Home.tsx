import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="text-center py-20 bg-gray-50 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Never lose a bottle return again.</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Return Pocket helps you scan, store, and organize your bottle deposit receipts — all in one place, even offline.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Join Waitlist
        </button>
      </section>
    </>
  );
}
