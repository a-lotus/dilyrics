class ShareApi {
  constructor (url, fetchFunc) {
    // const postHeaders = {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   'content-Type': 'application/json;charset=UTF-8'
    // }
    const postHeaders = new window.Headers()
    postHeaders.set('Content-Type', 'application/json')
    const init = body => {
      const init = {
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        mode: 'no-cors'
      }
      console.log('init', init)
      return init
    }
    this.get = (path) => fetchFunc(url + path, { method: 'GET' })
    this.post = (path, body) => fetchFunc(url + path, init(body))
  }

  getPlain (token) {
    return this.get(`/pt/${token}`)
  }

  addPlain (doc) {
    return this.post('/pt', doc)
  }
}

export default ShareApi
