import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { OptionType, renderOptions } from './SelectOption';
import { HelpTextContainer, StyledSelect } from './SelectStyle';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[] | OptionType[];
  helpText?: React.ReactNode;
  disabled?: boolean;
}

export const Select = ({
  disabled,
  helpText,
  id,
  name,
  options,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <div>
      <StyledSelect
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      >
        {renderOptions({ options })}
      </StyledSelect>
      {helpText && (
        <HelpTextContainer>
          <Typography
            as="span"
            variant="subtitle2"
            color={disabled ? Neutral.B85 : Neutral.B40}
          >
            {helpText}
          </Typography>
        </HelpTextContainer>
      )}
    </div>
  );
};
