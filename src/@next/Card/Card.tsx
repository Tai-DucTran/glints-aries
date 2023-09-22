import React from 'react';
import { ComponentAction } from '../../types/componentAction';
import { Button, PrimaryButton } from '../Button';
import { DestructivePlainButton } from '../Button/DestructivePlainButtonStyle';
import { PlainButton } from '../Button/PlainButtonStyle';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import {
  StyledCardActionWrapper,
  StyledCardContainer,
  StyledCardContentWrapper,
  StyledCardHeaderLeftContainer,
  StyledCardHeaderRightContainer,
  StyledCardHeaderSection,
  StyledCardHeaderSectionHalf,
  StyledCardHeaderWrapper,
} from './CardStyle';
import { Section } from './Section';

export type CardProps = {
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ComponentAction;
  secondaryAction?: ComponentAction;
  headerPrimaryAction?: ComponentAction;
  headerSecondaryAction?: ComponentAction;
  actionsAlignment?: 'left' | 'right';
  /** Defining custom actions will not show primary and secondary actions */
  customActions?: React.ReactNode;
};

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    customActions,
    headerPrimaryAction,
    headerSecondaryAction,
    actionsAlignment = 'right',
    children,
  }: CardProps,
  ref
) {
  const headingMarkup = (
    <Typography as="div" variant="subtitle1">
      {heading}
    </Typography>
  );

  const subHeadingMarkup = (
    <Typography as="div" variant="subtitle2">
      {subheading}
    </Typography>
  );

  const headerMarkup = () => {
    if (!!heading && !!subheading) {
      return (
        <>
          <StyledCardHeaderSectionHalf>
            {headingMarkup}
          </StyledCardHeaderSectionHalf>
          <StyledCardHeaderSectionHalf>
            {subHeadingMarkup}
          </StyledCardHeaderSectionHalf>
        </>
      );
    }

    if (heading) {
      return <StyledCardHeaderSection>{headingMarkup}</StyledCardHeaderSection>;
    }

    return (
      <StyledCardHeaderSection>{subHeadingMarkup}</StyledCardHeaderSection>
    );
  };

  const defaultActionContent = (
    <ButtonGroup>
      {secondaryAction && (
        <Button onClick={secondaryAction.action} {...secondaryAction}>
          {secondaryAction.label}
        </Button>
      )}
      {primaryAction && (
        <PrimaryButton onClick={primaryAction.action} {...primaryAction}>
          {primaryAction.label}
        </PrimaryButton>
      )}
    </ButtonGroup>
  );

  const actionsContent = customActions ? customActions : defaultActionContent;
  const showHeader = !!heading || !!subheading;
  const showActions = !!customActions || !!primaryAction || !!secondaryAction;

  return (
    <StyledCardContainer ref={ref} className="card-container">
      {showHeader && (
        <StyledCardHeaderWrapper className="card-heading-container">
          <StyledCardHeaderLeftContainer>
            {headerMarkup()}
          </StyledCardHeaderLeftContainer>
          <StyledCardHeaderRightContainer>
            <ButtonGroup fullWidth={false} isButtonWrapped={true}>
              {headerSecondaryAction && (
                <DestructivePlainButton
                  onClick={headerSecondaryAction.action}
                  size="slim"
                  {...headerSecondaryAction}
                >
                  {headerSecondaryAction.label}
                </DestructivePlainButton>
              )}
              {headerPrimaryAction && (
                <PlainButton
                  onClick={headerPrimaryAction.action}
                  size="slim"
                  {...headerPrimaryAction}
                >
                  {headerPrimaryAction.label}
                </PlainButton>
              )}
            </ButtonGroup>
          </StyledCardHeaderRightContainer>
        </StyledCardHeaderWrapper>
      )}
      <StyledCardContentWrapper
        data-actions={showActions}
        className="card-content-container"
      >
        {children}
      </StyledCardContentWrapper>
      {showActions && (
        <StyledCardActionWrapper
          data-align={actionsAlignment}
          className="card-actions-wrapper"
        >
          {actionsContent}
        </StyledCardActionWrapper>
      )}
    </StyledCardContainer>
  );
});

export const Card = Object.assign(CardComponent, { Section: Section });
