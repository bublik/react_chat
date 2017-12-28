export function loadChannels() {
  return {
    type: 'LOAD_ROOMS'
  }
}

export function handleClick(channel_id) {
  return {
    type: 'SHOW_ROOM',
    channel_id
  }
}

export const loadMessages = (channel_id) => (dispatch, getState) => {
  console.log('loadMessages', channel_id);
  let {messages} = getState();

  if (messages[channel_id]) {
    // There is cached data! Don't do anything.
    return
  }

  dispatch({
    type: 'LOAD_MESSAGES',
    channel_id
  })

  // Dispatch vanilla actions asynchronously
  return fetch(`/channels/${channel_id}`).then(
    response =>
      dispatch({
        type: 'LOAD_MESSAGES_SUCCESS',
        channel_id,
        response
      }),
    error =>
      dispatch({
        type: 'LOAD_MESSAGES_FAILURE',
        channel_id,
        error
      })
  )
}
