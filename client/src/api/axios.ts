import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
})

axiosInstance.interceptors.request.use(
  (config) => {
    const storageData =
      localStorage.getItem("lifeos-auth")

    if (storageData) {
      const parsed =
        JSON.parse(storageData)

      const token =
        parsed.state.token

      if (token) {
        config.headers.Authorization =
          `Bearer ${token}`
      }
    }

    return config
  }
)

export default axiosInstance