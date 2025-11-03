/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from "react";

export default function Analytics() {
  const [error, setError] = useState<boolean>(true);
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
      <div className="bg-linear-to-r from-blue-500 to-blue-600 p-4">
        <h3 className="text-xl font-bold text-white">📊 Analitički panel</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">
          Ovde možete pratiti analitičke podatke i statistike vaše aplikacije.
        </p>
        <div className="mt-4 flex items-center text-sm text-blue-600">
          <span>Pogledaj detalje →</span>
        </div>
      </div>
    </div>
  );
}
