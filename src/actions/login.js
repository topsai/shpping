export const login = (username, password) => {
    return {
        type: 'login',
        username: username,
        password: password,
    }
};