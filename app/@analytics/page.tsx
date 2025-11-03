'use client';
import { useState, useEffect } from 'react';

export default function Analytics() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setError(true); // Ovo će izazvati Error u sledećem renderu
      setLoading(true);
    }, 2000);
  }, []);

  if (error) {
    // Ovo će izazvati runtime error i prikazati fallback panel ako je sve podešeno
    throw new Error('Simulirana greška u analitičkom slotu');
  }

  if (loading) {
    return null; // Prikaziće loading.tsx
  }

  return
<>
 <div>Analitika je uspešno učitana</div>;
  <button>Ispravi →</button>;
</>

}
