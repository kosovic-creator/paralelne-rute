export default function Notifications() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
      <div className="bg-linear-to-r from-purple-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white">🔔 Notifikacije</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">
          Ovde možete pratiti sve važne obaveštenja i poruke.
        </p>
        <div className="mt-4 flex items-center text-sm text-purple-600">
          <span>Pogledaj detalje →</span>
        </div>
      </div>
    </div>
  );
}
