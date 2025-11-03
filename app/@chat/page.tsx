'use client';
import { useState, useEffect } from 'react';

export default function Chat() {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    // Nakon 2 sekunde postavi flag za grešku
    const timer = setTimeout(() => {
      setShouldThrow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (shouldThrow) {
    // Greška se baca u React lifecycle-u (ne odmah prilikom prvog rendera)
    throw new Error('Simulirana greška u chat slotu');
  }

  return <div>Chat panel je uspešno učitan!</div>;
}
