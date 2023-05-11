import React, { forwardRef, useEffect, useState } from 'react';
import { InputProps } from '../../../Input/Input';
import { StyledInput, StyledPrefixContainer } from '../../../Input/InputStyle';
import { Option } from '../../../Menu';
import { ClearSelected } from './ClearSelected';
import {
  InputContainer,
  StyledContainer,
  StyledSelectedValue,
} from './SearchableSelectInputStyle';

export interface SearchableSelectState {
  showSelected: boolean;
  showInput: boolean;
  showPlaceholder: boolean;
}

export type SearchableSelectInputProps = Omit<
  InputProps,
  'type' | 'onChange' | 'onSelect'
> & {
  canClear?: boolean;
  filterOptions?: (str: string) => Option[];
  onSelect?({ value }: { value: string }): void;
  selectedValue?: string;
  inputValue?: string;
  updateInputValue?: (newValue: string) => void;
  searchableSelectState?: SearchableSelectState;
  updateSearchableSelectState?: (newState: SearchableSelectState) => void;
  options?: Option[];
  updateMenuOptions?: (newState: Option[]) => void;
};

export const SearchableSelectInput = forwardRef<
  HTMLInputElement,
  SearchableSelectInputProps
>(function SearchableSelectInput(
  {
    disabled = false,
    error,
    filterOptions,
    onSelect,
    placeholder,
    prefix,
    selectedValue,
    width,
    inputValue,
    updateInputValue,
    onFocus,
    searchableSelectState: { showInput, showPlaceholder, showSelected },
    updateSearchableSelectState,
    options,
    updateMenuOptions,
    ...props
  }: SearchableSelectInputProps,
  ref
) {
  const [showClear, setShowClear] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setShowClear(false);

    onFocus(e);
  };

  const handleClearIconClick = () => {
    setShowClear(false);
    updateSearchableSelectState({
      showSelected: false,
      showPlaceholder: true,
      showInput: true,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.currentTarget.value;
    updateInputValue(str);

    const filteredOptions = filterOptions(str);
    updateMenuOptions(filteredOptions);

    updateSearchableSelectState({
      showSelected: false,
      showInput: true,
      showPlaceholder: false,
    });
  };

  const handleSelectedClick = () => {
    updateSearchableSelectState({
      showSelected: true,
      showInput: true,
      showPlaceholder: false,
    });

    updateInputValue('');
    updateMenuOptions(options);
  };

  const handleInputBlur = () => {
    if (selectedValue) {
      // allow onClick event handler in Menu before onBlur of input
      setTimeout(() => {
        setShowClear(true);

        updateSearchableSelectState({
          showSelected: true,
          showInput: false,
          showPlaceholder: false,
        });
      }, 100);
    }
  };

  useEffect(() => {
    if (selectedValue) {
      setShowClear(true);
      return;
    }

    setShowClear(false);
  }, [selectedValue]);

  return (
    <StyledContainer
      ref={ref}
      data-error={error}
      data-disabled={disabled}
      prefixWidth={37}
      suffixWidth={33}
      width={width}
    >
      <StyledPrefixContainer>{prefix}</StyledPrefixContainer>
      {showSelected && (
        <StyledSelectedValue
          className="searchable-select"
          onClick={handleSelectedClick}
        >
          {selectedValue}
        </StyledSelectedValue>
      )}
      {showInput && (
        <InputContainer>
          <StyledInput
            onChange={handleInputChange}
            placeholder={showPlaceholder ? placeholder : null}
            value={inputValue}
            onBlur={handleInputBlur}
            onFocus={handleFocus}
            {...props}
          />
        </InputContainer>
      )}
      {showClear && (
        <ClearSelected
          onSelect={onSelect}
          handleClearIconClick={handleClearIconClick}
          updateInputValue={updateInputValue}
        />
      )}
    </StyledContainer>
  );
});
