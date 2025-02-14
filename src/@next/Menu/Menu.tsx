import React from 'react';
import nextId from 'react-id-generator';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { StyledMenu, StyledSections, TitleContainer } from './MenuStyle';
import { MenuOptionLabel } from './components/MenuOptionLabel';
import { MenuOption } from './components/MenuOption';
import { MenuOptionCheckbox } from './components/MenuOptionCheckbox';

export interface Option {
  disabled?: boolean;
  id?: string;
  label: string | React.ReactNode;
  sublabel?: React.ReactNode;
  value: string;
}

export interface Section {
  title?: string;
  options: Option[];
}
export interface MenuProps {
  id?: string;
  onClick?: ({ value }: { value: string }) => void;
  options?: Option[];
  /** Selected value based on Option.value */
  selectedValues?: string[];
  title?: string;
  allowMultiple?: boolean;
  sections?: Section[];
}

export const Menu = ({
  allowMultiple,
  id,
  onClick,
  options,
  sections,
  selectedValues,
  title,
}: MenuProps) => {
  const randomId = nextId('glints-menu');
  const menuId = id ? id : randomId;

  const renderTitle = ({ title }: { title: string }) => {
    return (
      <TitleContainer>
        <Typography variant="subtitle2" as="span" color={Neutral.B40}>
          {title}
        </Typography>
      </TitleContainer>
    );
  };

  const renderOptions = ({ options }: { options: Option[] }) => {
    return (
      <StyledMenu>
        {options?.map((option: Option) => {
          const { value, label, sublabel, disabled, id } = option;
          const randomId = nextId('glints-menu-option');
          const menuOptionId = id ? id : randomId;
          const isSelected = selectedValues?.includes(value);

          return (
            <MenuOption
              key={menuOptionId}
              value={value}
              disabled={disabled}
              isSelected={isSelected}
              onClick={onClick}
              allowMultiple={allowMultiple}
            >
              <MenuOptionLabel label={label} sublabel={sublabel} />
            </MenuOption>
          );
        })}
      </StyledMenu>
    );
  };

  const renderOptionsWithCheckbox = ({ options }: { options: Option[] }) => {
    return (
      <StyledMenu>
        {options?.map((option: Option) => {
          const { value, label, disabled, id } = option;
          const randomId = nextId('glints-menu-option');
          const menuOptionId = id ? id : randomId;
          const isSelected = selectedValues?.includes(value);

          return (
            <MenuOption
              key={menuOptionId}
              value={value}
              disabled={disabled}
              isSelected={isSelected}
              onClick={onClick}
              allowMultiple={allowMultiple}
            >
              <MenuOptionCheckbox
                isSelected={isSelected}
                disabled={disabled}
                label={label}
              />
            </MenuOption>
          );
        })}
      </StyledMenu>
    );
  };

  const renderSections = ({ sections }: { sections: Section[] }) => {
    return (
      <StyledSections>
        {sections.map((section, index) => (
          <li key={`menu-section-${title}-${index}`}>
            {renderTitle({ title: section?.title })}
            {allowMultiple
              ? renderOptionsWithCheckbox({ options: section?.options })
              : renderOptions({ options: section?.options })}
          </li>
        ))}
      </StyledSections>
    );
  };

  return (
    <div id={menuId}>
      {title && renderTitle({ title })}
      {allowMultiple
        ? renderOptionsWithCheckbox({ options })
        : renderOptions({ options })}
      {sections && renderSections({ sections })}
    </div>
  );
};
