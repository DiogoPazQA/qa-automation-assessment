import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  check(res, {
    'status é 200': (r) => r.status === 200,
    'responde rápido': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
