import renderer from 'react-test-renderer'
import Text from '../Text'

describe('Text Component', () => {
  it('renders component', () => {
    const tree = renderer.create(<Text>Text</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Headings component', () => {
    const tree = renderer.create(<Text tagName="h1">Text</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
