import React from 'react';
import styled from 'styled-components';

import Button from '../../atomics/Button';
import Icon from '../../atomics/Icon';
import Message from '../../atomics/Message';
import { changeCardName } from '../../../store/action';

import { VStack } from '../../layout/flexbox';

import { useCardModalDispatch, useCardPaymentDispatch } from '../../context/CardPaymentContext';

type CardName = 'BC' | 'HANA' | 'HYUNDAI' | 'KAKAO' | 'KB' | 'LOTTE' | 'SHINHAN' | 'WORRI';

interface IconProps {
  cardName: CardName;
  width?: string;
  height?: string;
}

const CardIconButton: React.FC<IconProps> = ({ cardName, ...rest }) => {
  const dispatcher = useCardPaymentDispatch();
  const modalDispatcher = useCardModalDispatch();

  const onClickCardIcon = (cardName: string) => () => {
    dispatcher(changeCardName(cardName));
    modalDispatcher();
  };

  return (
    <StyledCardIconButton type="button" {...rest} onClick={onClickCardIcon(cardName)}>
      <Icon cardName={cardName} width="36px" height="36px" />
      <Message color="#525252" fontWeight={500} fontSize="12px">
        {cardName}
      </Message>
    </StyledCardIconButton>
  );
};

const StyledCardIconButton = styled(Button)`
  width: 64px;
  height: 64px;

  ${VStack}

  align-items: center;

  svg + span {
    margin-top: 12px;
  }
`;

export default CardIconButton;
