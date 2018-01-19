import { mount } from '@vue/test-utils'
import expect from 'expect'
import Reminders from '../src/components/Reminders.vue'

describe ('Reminder', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Reminders)
  })

  it ('hides the reminders list if there are none', () => {
    expect(wrapper.contains('ul')).toBe(false)
  })

  it ('can add reminders', () => {

    addReminder('Go to the store')

    expect(reminderList()).toContain('Go to the store')
  })

  it.only ('can remove any reminders', () => {
    addReminder('Go to the store')
    addReminder('Finish screencast')

    let deleteButton = wrapper.find('ul > li:first-child .remove')

    deleteButton.trigger('click')

    expect(reminderList()).not.toContain('Go to the store')
    expect(reminderList()).toContain('Finish screencast')
  })

  function addReminder(body) {
    let newReminder = wrapper.find('.new-reminder')

    newReminder.element.value = body
    newReminder.trigger('input')

    wrapper.find('button').trigger('click')
  }

  function reminderList () {
    return wrapper.find('ul').text()
  }
})
