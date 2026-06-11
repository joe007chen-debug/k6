import http from 'k6/http';
import { check, sleep } from 'k6';

// 压测配置
export const options = {
  vus: 5,    // 虚拟用户数
  duration: '10' // 压测时长30秒
};

// 每个VU循环执行逻辑
export default function () {
  const res = http.get('https://httpbin.org/get');
  // 断言：状态码200
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); // 每个请求间隔1秒
}