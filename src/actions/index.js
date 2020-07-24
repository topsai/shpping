export const selectTechs = (tech) => {
    return {
        type: 'select_tech',
        payload: tech
    }
};

export const logIn = (username, password) => {
    return {
        type: 'login_type',
        username: username,
        password: password,
    }
};

export const logOut = () => {
    return {type: 'logout_type'}
};