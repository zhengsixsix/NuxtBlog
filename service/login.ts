import request from './request';

interface RegisterReq {
  email: string;
  password: string;
}

interface LoginReq extends RegisterReq { }

export const register = async (data: RegisterReq) => {
  return await request.post('/blog/index/register', data);
};

export const login = async (data: LoginReq) => {
  return await request.post('/blog/index/login', data);
};
