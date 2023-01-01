export const required = (value) => {
    if (value) {
        return undefined
    }
    return 'Поле обязательно!'
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Длина свыше ${maxLength} символов!`
    }
    return undefined
}