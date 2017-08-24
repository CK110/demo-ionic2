const Server_Url='http://localhost:8085/mock'

//登录
export const LOGIN = `${Server_Url}/api/login` ; //登录
export const TEST = `${Server_Url}/test` ; //登录

//公假单
export const ERRAND_APP_ADD_SUBMIT =`${Server_Url}/oa/attend/errand/submitApp`;
export const ERRAND_APP_ADD_SAVE =`${Server_Url}`;
export const ERRAND_APPROVE_BATCH_INIT = `${Server_Url}/oa/attend/errand/queryInit`;
export const ERRAND_APPROVE_SINGLE_INIT = `${Server_Url}/oa/attend/errand/queryCurrent`;
export const ERRAND_APPROVE_BATCH_SUBMIT = `${Server_Url}/oa/attend/errand/apvSubmit`;

export const Errand_VIEW_INIT = `${Server_Url}/oa/attend/errand/viewApp`;

export const ERRAND_APP_LIST=`${Server_Url}/oa/attend/errand/queryApp`;


//ATM公假
export const ATM_ERRAND_ADD_SUBMIT =`${Server_Url}/oa/attend/atmerrand/submitApp`;
export const ATM_ERRAND_ADD_SAVE =`${Server_Url}/oa/attend/atmerrand/saveApp`;
export const ATM_Errand_APPROVE_BATCH_INIT =`${Server_Url}/oa/attend/atmerrand/batchInit`;
export const ATM_ERRAND_APPROVE_INIT =`${Server_Url}/oa/attend/atmerrand/initApv`;
export const ATM_ERRAND_APPROVE__BATCH_SUBMIT =`${Server_Url}/oa/attend/atmerrand/submitApv`;
export const ATM_ERRAND_VIEW__INIT =`${Server_Url}/oa/attend/atmerrand/submitApv`;
export const ATM_ERRAND_LIST=`${Server_Url}/oa/attend/errand/submitApp`;


//订票
export const AIR_APP_ADD_SUBMIT = `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP__ADD_SAVE= `${Server_Url}/oa/routine/air/addBookApp`;

export const AIR_APP_APPROVE_BATCH_INIT = `${Server_Url}/oa/routine/air/batchInit`;
export const AIR_APP_APPROVE_SINGLE_INIT =`${Server_Url}/oa/routine/air/initApv`;
export const AIR_APP_APPROVE__BATCH_SUBMIT =`${Server_Url}/oa/attend/atmerrand/submitApv`;
export const AIR_APP_VIEW__INIT =`${Server_Url}/oa/attend/atmerrand/submitApv`;
export const AIR_APP_LIST = `${Server_Url}/oa/routine/air/queryAirApp`;



//获取用户select
export const COMMON_SELECT_USER = `${Server_Url}/common/selectPerson`;
