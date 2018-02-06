import { mount } from '@vue/test-utils'
import expect from 'expect'
import Question from '../src/components/Question.vue'

describe ('Question', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Question, {
            propsData: {
                dataQuestion: {
                    title: 'The Title',
                    body: 'The Body'
                }
            }
        })
    })

    it('presents the title and the body', () => {
        see('The Title')
        see('The Body')
    })

    it('can be edited', () => {
        click('#edit')

        expect(wrapper.find('input[name=title]').element.value).toBe('The Title')
        expect(wrapper.find('textarea[name=body]').element.value).toBe('The Body')
    })

    it('hides the edit button during edit mode', () => {
        click('#edit')

        expect(wrapper.contains('#edit')).toBe(false)
    })

    it('update the question after being edited', () => {
        click('#edit')

        // wrapper.find('input[name=tile]').element.value = 'Change Title'
        // wrapper.find('input[name=title]').trigger('input')
        type('input[name=title]', 'Change Title')
        type('textarea[name=body]', 'Change Body')

        click('#update')

        see('Change Title')
        see('Change Body')
    })

    it('can cancel out of edit mode', () => {
        click('#edit')

        type('input[name=title]', 'Change Title')

        click('#cancel')

        see('The Title')
    })

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper

        expect(wrap.html()).toContain(text)
    }

    let type = (selector, text) => {
        let node = wrapper.find(selector)

        node.element.value = text
        node.trigger('input')
    }

    let click = selector => {
        wrapper.find(selector).trigger('click')
    }

})
