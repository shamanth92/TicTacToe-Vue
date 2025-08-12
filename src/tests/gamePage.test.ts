import { mount } from '@vue/test-utils'
import gamePage from './../views/gamePage.vue'

test('displays the form', () => {
  const wrapper = mount(gamePage, {})

  expect(wrapper.text()).toContain('Enter Player Names')
})

test('displays error messages', async () => {
  const wrapper = mount(gamePage, {})

  await wrapper.find('form').trigger('submit.prevent')

  expect(wrapper.text()).toContain('Enter Player One Name')
  expect(wrapper.text()).toContain('Enter Player Two Name')
  expect(wrapper.text()).toContain('Select Number of Games')
})

test('test form and start game', async () => {
  const wrapper = mount(gamePage, {})

  const inputs = wrapper.findAll('input[type=text]')
  await inputs[0].setValue('Arpita')
  await inputs[1].setValue('Shamanth')
  await wrapper.find('input[type=radio]').setValue('3')

  await wrapper.find('form').trigger('submit.prevent')

  expect(wrapper.text()).toContain('Current Players:')
  expect(wrapper.text()).toContain('Arpita')
  expect(wrapper.text()).toContain('Shamanth')
    expect(wrapper.text()).toContain('Tic Tac Toe')
  expect(wrapper.text()).toContain('Score')
})
