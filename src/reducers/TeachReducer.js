import data from './test.json'
export default (state, action)=> {
    console.log('TechReducer',state, action);

    return data
}