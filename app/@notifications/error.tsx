'use client';

import { useEffect } from 'react';

export default function NotificationsError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      Došlo je do greške u učitavanju notifikacija.
      <button onClick={() => reset()}>Pokušaj ponovo</button>
    </div>
  );
}
