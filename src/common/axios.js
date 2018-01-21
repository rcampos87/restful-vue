import axios from 'axios'

class Axios {
  doDelete(url, params) {
    return this.doRequest(url, params, 'delete')
  }

  doGet(url) {
    return this.doRequest(url, {}, 'get')
  }

  doPost(url, params) {
    return this.doRequest(url, params, 'post')
  }

  doPut(url, params) {
    return this.doRequest(url, params, 'put')
  }

  doPatch(url, params) {
    return this.doRequest(url, params, 'patch')
  }

  doRequest(url, params, method) {
    return new Promise((resolve, reject) => {
      return axios[method](url, params)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  }
}

export default Axios
