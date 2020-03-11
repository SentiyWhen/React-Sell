import request from '../utils/request';

export async function getSeller() {
  return request('api/seller');
}