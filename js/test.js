import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "./bundle.js";

export const options = {
  vus: 5,
  duration: '10s'
};

export default function () {
  const res = http.get('https://httpbin.org/get');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}