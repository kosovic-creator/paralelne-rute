'use client';

import { useEffect } from 'react';

export default function ChatError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Greška u chat slotu:', error);
  }, [error]);

  return (
    <div>
      <p>Došlo je do greške u chat slotu: {error.message}</p>
      <button onClick={() => reset()}>Pokušaj ponovo</button>
    </div>
  );
}
