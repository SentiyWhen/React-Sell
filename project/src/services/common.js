import request from '../utils/request';

export async function getSeller() {
  return request('api/seller');
}

export async function getGoods() {
  return request('api/goods');
}