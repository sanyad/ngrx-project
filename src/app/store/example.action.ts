import {createAction, props} from '@ngrx/store'

export namespace ExampleActions {
  export const increaseCount = createAction('INCREASE_COUNT')
  export const decreaseCount = createAction('DECREASE_COUNT')
  export const increaseDateFromOneMinute = createAction('CHANGE_DATE')
  export const sendMessage = createAction(
    'SEND_MESSAGE',
    props<{message?: string}>()
  )
  export const getData = createAction('GET_DATA')
  export const getDataSuccess = createAction(
    'GET_DATA_SUCCESS',
    props<{data: any}>()
  )
  export const getDataError = createAction(
    'GET_DATA_ERROR',
    props<{error: any}>()
  )
}
