import axios from 'axios'

axios.defaults.baseURL = 'http://hongselvyou.lndx-study.beihero.com'

// 请求拦截处理
axios.interceptors.request.use((config) => {
	// 在请求头中都带上token信息
	// config.headers.token = 'chdlovejob'
}, (err) => Promise.reject(err))

// 响应拦截处理
axios.interceptors.response.use((res) => res.data, (err) => Promise.reject(err))

export default axios
