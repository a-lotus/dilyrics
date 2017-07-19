const share = (state, action) => {
  if (!state) {
    state = {
      date: new Date(),
      description: '',
      text: '',
      lastToken: '',
      lastError: '',
      isFetching: false
    }
  }

  switch (action.type) {
    case 'SHARE_SET_DATE':
      return { ...state, date: action.date }

    case 'SHARE_SET_DESCRIPTION':
      return { ...state, description: action.description }

    case 'SHARE_SET_TEXT':
      return { ...state, text: action.text }

    case 'SHARE_SUBMIT_REQUEST':
      return { ...state, isFetching: true }

    case 'SHARE_SUBMIT_SUCCESS':
      return { ...state, lastToken: action.lastToken, isFetching: false }

    case 'SHARE_SUBMIT_FAILURE':
      return { ...state, lastError: action.err, isFetching: false }

    default:
      return state
  }
}

export default share
