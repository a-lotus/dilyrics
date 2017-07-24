const share = (state, action) => {
  if (!state) {
    state = {
      date: new Date(),
      description: '',
      isFetching: false,
      isSubmitting: false,
      items: [],
      itemsOnServerCount: 0,
      lastError: '',
      lastToken: '',
      text: ''
    }
  }

  switch (action.type) {
    case 'SHARE_SET_DATE':
      return { ...state, date: action.date }

    case 'SHARE_SET_DESCRIPTION':
      return { ...state, description: action.description }

    case 'SHARE_SET_TEXT':
      return { ...state, text: action.text }

    // SUBMIT
    case 'SHARE_SUBMIT_REQUEST':
      return { ...state, isSubmitting: true }

    case 'SHARE_SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        items: [action.document].concat(state.items),
        lastToken: action.document.token,
        date: new Date(),
        description: '',
        text: ''
      }

    case 'SHARE_SUBMIT_FAILURE':
      return { ...state, lastError: action.err, isSubmitting: false }

    // LOAD LAST
    case 'SHARE_LOAD_LAST_REQUEST':
      return { ...state, isFetching: true }

    case 'SHARE_LOAD_LAST_SUCCESS':
      return {
        ...state,
        items: state.items.concat(action.items),
        itemsOnServerCount: action.count,
        isFetching: false
      }

    case 'SHARE_LOAD_LAST_FAILURE':
      return { ...state, lastError: action.err, isFetching: false }

    default:
      return state
  }
}

export default share
