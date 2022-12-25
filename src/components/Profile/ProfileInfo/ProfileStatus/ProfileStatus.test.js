import {act, create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Статус из пропсов должен быть в <span>', () => {
        const component = create(<ProfileStatus profileStatus='всем привет я тут новенький'/>)
        const instance = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = instance.findByType('span')
        expect(span.props.children).toBe('всем привет я тут новенький')
    })
    test('После создания компоненты должен быть отображен <span>', () => {
        const component = create(<ProfileStatus profileStatus='всем привет я тут новенький'/>)
        const instance = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = instance.findByType('span')
        expect(span).not.toBeNull()
    })
    test('После создания компоненты НЕ должен быть отображен <input>', () => {
        const component = create(<ProfileStatus profileStatus='всем привет я тут новенький'/>)
        const instance = component.root
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            const input = instance.findByType('input')
        }).toThrow()
    })
    test('При нажатии на статус происходит переход в editMode', () => {
        const component = create(<ProfileStatus profileStatus='всем привет я тут новенький'/>)
        const instance = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = instance.findByType('span')
        act(() => {
            span.props.onClick()
        })
        // eslint-disable-next-line testing-library/await-async-query
        const input = instance.findByType('input')
        expect(input.props.value).toBe('всем привет я тут новенький')
    })
    test('При нажатии на кнопку отправки должен вызываться callback', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus profileStatus='всем привет' updateProfileStatus={mockCallback}/>)
        const instance = component.root
        // eslint-disable-next-line testing-library/await-async-query
        const span = instance.findByType('span')
        act(() => {
            span.props.onClick()
        })
        // eslint-disable-next-line testing-library/await-async-query
        const button = instance.findAllByType('button')[0]
        act(() => {
            button.props.onClick()
        })
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})