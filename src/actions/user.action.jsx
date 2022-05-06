export const LOAD_USER = 'LOAD_USER';

export const loadUser = (infos) => {
    return (dispatch) => {
        return dispatch({type: LOAD_USER, payload: {money:infos.money,bank : infos.bank}})
    }
}