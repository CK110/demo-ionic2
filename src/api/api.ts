const Server_Url='http://localhost:8085/mock'

//登录
export const LOGIN = `${Server_Url}/api/login` ; //登录
export const TEST = `${Server_Url}/test` ; //登录

//公假单
export const ERRAND_APP_ADD =`${Server_Url}/oa/attend/errand/submitApp`;


//订票
export const AIR_APP_ADD = `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP_LIST = `${Server_Url}/oa/routine/air/queryAirApp`;
export const AIR_APP_APPROVE = `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP_SAVE= `${Server_Url}/oa/routine/air/addBookApp`;



//获取用户select
export const COMMON_SELECT_USER = `${Server_Url}/common/selectPerson`;
