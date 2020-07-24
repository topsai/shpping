export default (state=null, action) => {
    console.log('SelectionReducer', state, action);
    if (action.type === 'select_tech') {
        console.log('点击了', action.payload);
        return action.payload
    }
    return state
} 