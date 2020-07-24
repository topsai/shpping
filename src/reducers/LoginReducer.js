export default (state = 'login', action) => {
    if (action.type === 'login_type') {
        console.log('login', state, action);
        return "Fan"
    }else if(action.type === 'logout_type'){
        console.log('logOut', state, action);
        return "login"
    }
    return state
} 