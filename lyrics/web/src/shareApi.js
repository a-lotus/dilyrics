class ShareApi {
  constructor (url, fetchFunc) {
    const postHeaders = new window.Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    })
    const postOptions = body => {
      const init = {
        body: JSON.stringify(body),
        headers: postHeaders,
        method: 'POST',
        mode: 'cors'
      }
      return init
    }

    this.get = (path) => fetchFunc(url + path, { method: 'GET' })
    this.post = (path, body) => fetchFunc(url + path, postOptions(body))
  }

  getCount () {
    return this.get('/pt/count')
  }

  getPlain (id) {
    return this.get(`/pt/json/${id}`)
  }

  getPlainList (isoDate) {
    return this.get(`/pt/json/last/${this.queryLimit || 5}/${isoDate}`)
  }

  addPlain (doc) {
    return this.post('/pt', doc)
  }
}

export default ShareApi
