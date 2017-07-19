const settings = (state, action) => {
  if (!state) {
    state = {
      items: []
    }
  }

  switch (action.type) {
    case 'SOME_ACTION_TYPE':
      return state

    default:
      return state
  }
}

export default settings
