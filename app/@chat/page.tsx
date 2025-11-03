/* eslint-disable @next/next/no-async-client-component */
'use client';
async function getChatData(): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 3000); // simulacija 3 sekunde čekanja
  });
}

export default async function Chat() {
  await getChatData();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
      <div className="bg-linear-to-r from-purple-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white">💬 Chat</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">
          Ovde možete pratiti chat.
        </p>
        <div className="mt-4 flex items-center text-sm text-purple-600">
          <span>Pogledaj detalje →</span>
        </div>
      </div>
    </div>
  );
}

