type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    }
    return 'Поле обязательно!'
}

export const maxLength = (maxLength: number): FieldValidatorType => (value) => {
    if (value && value.length > maxLength) {
        return `Длина свыше ${maxLength} символов!`
    }
    return undefined
}