export const addData = (data) => {
    return {
        type: 'ADD_DATA',
        payload: data
    }
}

export const deleteData = (data) => {
    return {
        type: 'DELETE_DATA',
        payload: data
    }
}