import request from './request';

interface LoginReq {
  email: string;
  password: string;
}

interface RegisterReq extends LoginReq {
  username: string;
  code: string;
}

// 注册
export const register = async (data: RegisterReq) => {
  return await request.post('/blog/index/register', data);
};

// 登录
export const login = async (data: LoginReq) => {
  return await request.post('/blog/index/login', data);
};

// 发送验证码
export const sendMail = async (name: string, sendTo: string) => {
  return await request.post(`/blog/sendMail/sendVerificationCodeMail/${name}/${sendTo}`);
};

// 校验昵称是否重复
export const repeatUsername = async (name: string) => {
  return await request.get(`/blog/user/findUserName/${name}`);
};
