// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';

describe('<Select /> can still work when receives non-string and non-number option children or value', () => {
  test('non-string and non-number option children, click option', async () => {
    const onChange = jest.fn();

    const Component = () => (
      <Select
        label="non-string and non-number option children"
        onChange={onChange}
      >
        <Select.Option value="one">
          <span data-testid="option-1">1</span>
        </Select.Option>
        <Select.Option value="two">
          <span data-testid="option-2">2</span>
        </Select.Option>
        <Select.Option value="three">
          <span data-testid="option-3">3</span>
        </Select.Option>
      </Select>
    );

    const { queryByText, asFragment } = render(<Component />);
    const downArrowIcon = document.querySelector('.select-icon');
    fireEvent.click(downArrowIcon);
    const option1 = queryByText('1');
    fireEvent.mouseDown(option1);

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });

  test('non-string and non-number option children, search filtering', async () => {
    const Component = () => (
      <Select label="non-string and non-number option children">
        <Select.Option value="one">
          <span>1</span>
        </Select.Option>
        <Select.Option value="two">
          <span>2</span>
        </Select.Option>
        <Select.Option value="three">
          <span>3</span>
        </Select.Option>
      </Select>
    );

    const { queryByRole, queryAllByTestId, asFragment } = render(<Component />);

    const selectInput = queryByRole('combobox');
    userEvent.type(selectInput, '1');
    const filteredOptions = queryAllByTestId('option');
    expect(filteredOptions.length).toEqual(3);
    expect(asFragment()).toMatchSnapshot();
  });

  test('non-string and non-number defaultValue', async () => {
    const testNonStringDefaultValue = ([defaultValue, expectedValue]: any) => {
      const Component = () => (
        <Select
          label="non-string and non-number defaultValue"
          defaultValue={defaultValue}
        >
          <Select.Option value="one">
            <span>1</span>
          </Select.Option>
          <Select.Option value="two">
            <span>2</span>
          </Select.Option>
          <Select.Option value="three">
            <span>3</span>
          </Select.Option>
        </Select>
      );

      const { queryByRole, unmount } = render(<Component />);
      const selectInput = queryByRole('combobox') as HTMLInputElement;
      expect(selectInput.value).toEqual(expectedValue);
      unmount();
    };

    [
      [1, '1'],
      [{ key: 'value' }, '[object Object]'],
      [[1, 2, 3], '1,2,3'],
    ].forEach(([defaultValue, expectedValue]) => {
      testNonStringDefaultValue([defaultValue, expectedValue]);
    });
  });

  test('non-string and non-number value', async () => {
    const testNonStringValue = ([value, expectedValue]: any) => {
      const Component = () => (
        <Select label="non-string and non-number defaultValue" value={value}>
          <Select.Option value="one">
            <span>1</span>
          </Select.Option>
          <Select.Option value="two">
            <span>2</span>
          </Select.Option>
          <Select.Option value="three">
            <span>3</span>
          </Select.Option>
        </Select>
      );

      const { queryByRole, unmount } = render(<Component />);
      const selectInput = queryByRole('combobox') as HTMLInputElement;
      expect(selectInput.value).toEqual(expectedValue);
      unmount();
    };

    [
      [1, '1'],
      [{ key: 'value' }, '[object Object]'],
      [[1, 2, 3], '1,2,3'],
    ].forEach(([value, expectedValue]) => {
      testNonStringValue([value, expectedValue]);
    });
  });

  test('rerender with non-string and non-number value', async () => {
    const Component = ({ value }: { value: string }) => (
      <Select label="rerender" value={value}>
        <Select.Option value="rerender">Rerender</Select.Option>
      </Select>
    );

    const { queryByRole, rerender } = render(<Component value="Rerender" />);
    const selectInput = queryByRole('combobox');
    expect(selectInput.getAttribute('value')).toEqual('Rerender');

    rerender(<Component value={1} />);
    expect(selectInput.getAttribute('value')).toEqual('1');

    rerender(<Component value={[1, 2, 3]} />);
    expect(selectInput.getAttribute('value')).toEqual('1,2,3');

    rerender(<Component value={{ key: 'value' }} />);
    expect(selectInput.getAttribute('value')).toEqual('[object Object]');
  });
});
