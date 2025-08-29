import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 500,                // 500 usuários virtuais
  duration: '5m',          // duração 5 minutos
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições < 500ms
    http_req_failed: ['rate<0.01'],   // taxa de erro < 1%
  },
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém userId': (r) => r.body.includes('userId'),
  });
  sleep(1);
}
