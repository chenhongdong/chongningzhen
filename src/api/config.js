// 基础URL
export const BASE_URL = 'https://hongselvyou.lndx-study.beihero.com'
// 景点查询分页
export const GET_SCENIC_SPOT_FIND = BASE_URL + '/api/posts/home/scenic_spot/findPaging'
// 景点查询详情页传入对应id
export const GET_SCENIC_SPOT_DETAIL = BASE_URL + '/api/posts/home/scenic_spot/find'
// 通过别名获取banner
export const GET_AD_BANNER = BASE_URL + '/api/meta/home/banner/advertising/findByAliasLoadSubList'
// 通过最小时间获取预约课程
export const GET_COURSE = BASE_URL + '/api/posts/home/booking_plan/findPagingByMinDate'
// 添加预约
export const ADD_STUDY_USER = BASE_URL + '/api/posts/home/user_booking/addByCurrentUser'
// 微信OpenId
export const OPENID_VERIFY = BASE_URL + '/api/user/home/wxAuth/loginByWxOpenId'

export default {
    GET_SCENIC_SPOT_FIND,
    GET_SCENIC_SPOT_DETAIL,
    GET_AD_BANNER,
    GET_COURSE,
    ADD_STUDY_USER,
    OPENID_VERIFY
}
