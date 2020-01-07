import { axios } from '@/utils/request'

const api = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	ForgePassword: '/auth/forge-password',
	Register: '/auth/register',
	twoStepCode: '/auth/2step-code',
	SendSms: '/account/sms',
	SendSmsErr: '/account/sms_err',
	// get my info
	UserInfo: '/user/info'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (data) {
  return axios({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getSmsCaptcha (data) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data
  })
}

export function getInfo (params) {
  return axios({
    url: '/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
		params
  })
}

export function getCurrentUserNav (params) {
  return axios({
    url: '/user/nav',
    method: 'get',
		params
  })
}

export function logout () {
  return axios({
    url: '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (data) {
  return axios({
    url: api.twoStepCode,
    method: 'post',
    data
  })
}
