export type Health = {
  status: 'ok';
  service: string;
  timestamp: string;
};

export function getHealth(): Health {
  return {
    status: 'ok',
    service: 'tiny-routine-log',
    timestamp: new Date().toISOString()
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(getHealth(), null, 2));
}
