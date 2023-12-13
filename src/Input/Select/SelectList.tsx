import * as React from 'react';

import SelectItem from './SelectItem';

import Loading from '../../General/Loading';
import { SelectListWrapper } from './SelectStyle';

const SelectList: React.FunctionComponent<Props> = ({
  activeOptionIndex,
  options,
  isFocus,
  isLoading,
  noOptionResult,
  small,
  handleClickOnOption,
  handleMouseEnterOption,
}: Props) => (
  <SelectListWrapper
    className="select-listbox"
    role="listbox"
    data-testid="listbox"
    aria-hidden={!isFocus && true}
    open={isFocus}
    small={small}
  >
    {options.length !== 0 && !isLoading ? (
      options.map((data: React.ReactElement<SelectItemProps>, index) => {
        const { value, children, ...restProps } = data.props;
        delete restProps.onOptionClick;
        return (
          <SelectItem
            {...restProps}
            className={activeOptionIndex === index ? 'active' : null}
            key={value}
            role="option"
            data-testid="option"
            data-id={index}
            data-value={value}
            onClick={handleClickOnOption}
            onMouseEnter={handleMouseEnterOption}
            tabIndex={0}
          >
            {children}
          </SelectItem>
        );
      })
    ) : isLoading ? (
      <SelectItem className="select-loading" role="option">
        <Loading />
      </SelectItem>
    ) : (
      Boolean(noOptionResult) && (
        <SelectItem
          disabled
          role="option"
          data-testid="option"
          aria-hidden={false}
          aria-disabled="true"
        >
          {noOptionResult}
        </SelectItem>
      )
    )}
  </SelectListWrapper>
);

interface Props {
  activeOptionIndex: number;
  options: React.ReactNode[];
  isFocus: boolean;
  isLoading: boolean;
  noOptionResult?: string;
  small?: boolean;
  handleClickOnOption?: () => void;
  handleMouseEnterOption(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void;
}

export interface SelectItemProps {
  children: string | number | React.ReactNode;
  value?: string;
  onOptionClick?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default SelectList;
