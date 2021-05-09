import { render } from '@testing-library/react'
import { FormItem } from '../../../components/base/FormItem'

test('renders <FormItem /> and assigns the htmlFor as it should', () => {
  const label = 'Test'
  const { getByLabelText } = render(
    <FormItem label={label}>
      <input id="test" />
    </FormItem>
  )

  expect(getByLabelText(label)).not.toBeNull()
})