export function addNumber(number) {
    return {
        type: 'ADD',
        payload: number
    }
}

export function substrackNumber(number) {
    return {
        type: 'SUBSTRACK',
        payload: number
    }
}