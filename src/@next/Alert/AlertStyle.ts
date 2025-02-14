import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import * as Breakpoints from '../utilities/breakpoints';
import { Green, Neutral, Blue, Orange, Red } from '../utilities/colors';
import { space12, space8 } from '../utilities/spacing';

export const StyledAlertContainer = styled.div<{
  zIndex?: number;
  position?: {
    top?: string;
    right?: string;
  };
}>`
  position: fixed;
  top: ${props => (props.position?.top ? props.position.top : '90px')};
  right: ${props => (props.position?.right ? props.position.right : '24px')};
  display: flex;
  padding: ${space12};
  gap: ${space8};
  max-width: 640px;
  width: fit-content;
  border-radius: ${borderRadius4};
  box-shadow:
    0px 8px 20px rgba(71, 71, 71, 0.2),
    0px 3px 6px -3px rgba(71, 71, 71, 0.08);
  animation: slide-from-right 400ms cubic-bezier(0.35, 0.8, 1, 0.86);
  z-index: ${props => (props.zIndex ? props.zIndex : 100)};
  color: ${Neutral.B18};
  svg {
    display: block;
    height: 24px;
    width: 24px;
  }

  &[data-titled='true'] svg {
    margin-top: 3px;
  }

  &[data-status='success'] {
    background: ${Green.B89};
  }
  &[data-status='success'] svg {
    fill: ${Green.B61};
  }

  &[data-status='info'] {
    background: ${Blue.S08};
  }
  &[data-status='info'] svg {
    fill: ${Blue.S99};
  }

  &[data-status='warning'] {
    background: ${Orange.S21};
  }
  &[data-status='warning'] svg {
    fill: ${Orange.S86};
  }

  &[data-status='error'] {
    background: ${Red.B100};
  }
  &[data-status='error'] svg {
    fill: ${Red.B93};
  }

  @media (max-width: ${Breakpoints.large}) {
    top: 60px;

    &[data-titled='true'] {
      margin-top: -1px;
    }
    &[data-titled='true'] svg {
      margin-top: 0;
    }
    padding: ${space8};
    min-height: 37px;
  }

  @media (max-width: 480px) {
    &[data-titled='true'] {
      margin-top: -1px;
    }
    &[data-titled='true'] svg {
      margin-top: 0;
    }
    max-width: calc(100vw - 48px);
  }

  @keyframes slide-from-right {
    0% {
      transform: translateX(50px);
    }
    50% {
      transform: translateX(0px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const StyledAlertCloseIconContainer = styled.div`
  cursor: pointer;
  &&& svg {
    fill: ${Neutral.B40};
  }
`;

export const StyledAlertContentColumn = styled.div`
  min-width: 240px;
  max-width: 560px;
  padding: 0;

  @media (max-width: 480px) {
    min-width: unset;
  }
`;
