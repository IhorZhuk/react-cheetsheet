export const actionTypes = {
  CURRENT_USER_SUCCESS: 'SAMPLE/CURRENT_USER_SUCCESS',
  CURRENT_USER_REQUEST: 'SAMPLE/CURRENT_USER_REQUEST',
} as const;

type TState = {
  currentUser: {
    id: number
  } | null;
}

type TActionUserSuccess = {
  type: typeof actionTypes.CURRENT_USER_SUCCESS;
  payload: {
    id: number;
  }
}

type TActions = TActionUserSuccess;

const initState: TState = {
  currentUser: null
};

export default (state: TState = initState, action: TActions) => {
  switch (action.type) {
   case actionTypes.CURRENT_USER_SUCCESS: 
    return {
      ...state,
      currentUser: action.payload
    }

    default:
      return state;
  }
};

export const actions = {
  currentUserReq: () => ({ type: actionTypes.CURRENT_USER_REQUEST }),
};