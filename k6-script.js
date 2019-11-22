// import http from 'k6/http';
// import { check } from 'k6';

// export const options = {
//   stages: [
//     { duration: '30s', target: 1 },
//     { duration: '30s', target: 50 },
//     { duration: '30s', target: 100 },
//   ],
//   rps: 1000,
// };

// export default function () {
//   const res = http.get(`http://localhost:4000/?movie=${Math.floor(Math.random() * Math.floor(150000))}`);
//   check(res, {
//     'status 200': (r) => r.status === 200,
//     'transaction time OK': (r) => r.timings.duration < 200,
//   });
// }

// to run: k6 run k6-script.js

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let options = {
  thresholds: {
    'failed requests': ['rate<0.01'],
  },
  stages: [
    { duration: '10s', target: 1 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 1000 }
  ],
  vusMax: 1000
};

export default function() {
  const randomEndpoint = () => {
    return `http://localhost:4000/`;
  };

  let res = http.get(randomEndpoint());
}
