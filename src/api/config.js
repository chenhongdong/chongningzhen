// 基础URL
export const BASE_URL = 'https://hongselvyou.lndx-study.beihero.com'
// 景点查询分页
export const GET_SCENIC_SPOT_FIND = BASE_URL + '/api/posts/home/scenic_spot/findPaging'
// 景点查询分页加载按钮
export const GET_SCENIC_SPOT_FIND_LOAD = BASE_URL + '/api/posts/home/scenic_spot/findPagingLoadBtn'
// 景点查询详情页传入对应id
export const GET_SCENIC_SPOT_DETAIL = BASE_URL + '/api/posts/home/scenic_spot/find'
// 查询通过id加载按钮     
export const GET_SCENIC_SPOT_DETAIL_LOAD = BASE_URL + '/api/posts/home/scenic_spot/findLoadBtn'
// 通过别名获取banner
export const GET_AD_BANNER = BASE_URL + '/api/meta/home/banner/advertising/findByAliasLoadSubList'
// 通过最小时间获取预约课程
export const GET_COURSE = BASE_URL + '/api/posts/home/booking_plan/findPagingByMinDate'
// 微信OpenId
export const OPENID_VERIFY = BASE_URL + '/api/user/home/wxAuth/loginByWxOpenId'
// 更新用户资料
export const UPDATE_USER_PROFILE = BASE_URL + '/api/user/home/orgUser/updateCurrentUserProfile'
// 获取我的学习预约
export const GET_MY_STUDY = BASE_URL + '/api/posts/home/user_booking/findPagingByCurrentUser'
// 添加预约
export const ADD_STUDY_USER = BASE_URL + '/api/posts/home/user_booking/addByCurrentUser'
// 取消预约
export const DEL_STUDY_USER = BASE_URL + '/api/posts/home/user_booking/deleteByCurrentUser'
// 刷新令牌
export const REFRESH_TOKEN = BASE_URL + '/api/user/home/wxAuth/refreshToken'

export default {
    GET_SCENIC_SPOT_FIND,
    GET_SCENIC_SPOT_FIND_LOAD,
    GET_SCENIC_SPOT_DETAIL,
    GET_SCENIC_SPOT_DETAIL_LOAD,
    GET_AD_BANNER,
    GET_COURSE,
    OPENID_VERIFY,
    UPDATE_USER_PROFILE,
    GET_MY_STUDY,
    ADD_STUDY_USER,
    DEL_STUDY_USER,
    REFRESH_TOKEN
}
