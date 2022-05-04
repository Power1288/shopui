export const FILTER_ITEM = "FILTER_ITEM";


export const filterItem = (filter) => {
    return (dispatch) => {
        return dispatch({type:FILTER_ITEM, payload:filter});
    }
}