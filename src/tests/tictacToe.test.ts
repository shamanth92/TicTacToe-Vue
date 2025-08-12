import { mount } from '@vue/test-utils'
import TicTacToeGame from '@/components/TicTacToeGame.vue'

test('displays the tic tac toe board', () => {
  const wrapper = mount(TicTacToeGame, {
    props: {
      startGameOption: true,
      playerOne: 'Arpita',
      playerTwo: 'Shamanth',
      endGame: false,
      restartGame: false,
      startNew: false,
    },
  })

  expect(wrapper.text()).toContain('Arpita: X')
  expect(wrapper.text()).toContain('Shamanth: O')
})

test('determines the winner', async() => {
  const wrapper = mount(TicTacToeGame, {
    props: {
      startGameOption: true,
      playerOne: 'Arpita',
      playerTwo: 'Shamanth',
      endGame: false,
      restartGame: false,
      startNew: false,
    },
  })

  const btn = wrapper.findAll('#tic-tac-toe')
  await btn[0].trigger('click')
  await btn[4].trigger('click')
  await btn[1].trigger('click')
  await btn[5].trigger('click')
  await btn[2].trigger('click')

  expect(wrapper.text()).toContain('Arpita wins!')
})
