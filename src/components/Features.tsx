export default function Features() {
  const features = [
    { title: "Offline Scanning", desc: "Scan receipts even without internet access." },
    { title: "Local Storage", desc: "Your data stays private and on your phone." },
    { title: "Receipt Search", desc: "Quickly find receipts by date or location." },
    { title: "Barcode Capture", desc: "Use your camera to log bottle returns in seconds." },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
