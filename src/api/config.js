// 基础URL
export const BASE_URL = 'https://hongselvyou.lndx-study.beihero.com'
// 景点查询分页
export const GET_SCENIC_SPOT_FIND = BASE_URL + '/api/posts/home/scenic_spot/findPaging'
// 景点查询详情页传入对应id
export const GET_SCENIC_SPOT_DETAIL = BASE_URL + '/api/posts/home/scenic_spot/find'
// 通过别名获取banner
export const GET_AD_BANNER = BASE_URL + '/api/meta/home/banner/advertising/findByAliasLoadSubList'

export default {
    GET_SCENIC_SPOT_FIND,
    GET_SCENIC_SPOT_DETAIL,
    GET_AD_BANNER
}
