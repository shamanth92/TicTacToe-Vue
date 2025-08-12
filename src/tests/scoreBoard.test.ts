import { mount } from '@vue/test-utils'
import ScoreBoard from '@/components/ScoreBoard.vue'

test('displays the score board', () => {
  const wrapper = mount(ScoreBoard, {
    props: {
      playerOne: 'Arpita',
      playerTwo: 'Shamanth',
      playerOneWins: 1,
      playerTwoWins: 0,
      selectedOption: '5',
      endGame: false,
      gameWinner: '',
    },
  })

  expect(wrapper.text()).toContain('Best of 5 games')
  expect(wrapper.text()).toContain('Start New Game')
})

test('displays the winner', () => {
  const wrapper = mount(ScoreBoard, {
    props: {
      playerOne: 'Arpita',
      playerTwo: 'Shamanth',
      playerOneWins: 3,
      playerTwoWins: 0,
      selectedOption: '5',
       endGame: true,
      gameWinner: 'Arpita',
    },
  })

  expect(wrapper.text()).toContain('Congratulations! Arpita wins the game!')
})
