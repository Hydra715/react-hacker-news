import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'

const actions = {
  // ...storyActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}