export default function Chat() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
      <div className="bg-linear-to-r from-green-500 to-green-600 p-4">
        <h3 className="text-xl font-bold text-white">💬 Chat panel</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">
          Ovde možete pratiti chat poruke i interakcije korisnika.
        </p>
        <div className="mt-4 flex items-center text-sm text-green-600">
          <span>Pogledaj detalje →</span>
        </div>
      </div>
    </div>
  );
}
