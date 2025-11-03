/* eslint-disable @next/next/no-async-client-component */
'use client';
// Na primer, simulacija asinhrone funkcije koja vraća podatke
async function getChatData(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Podaci sa chata su učitani!');
    }, 3000); // 3 sekunde čeka
  });
}

export default async function Chat() {
  const data = await getChatData();

  return <div>{data}</div>;
}

