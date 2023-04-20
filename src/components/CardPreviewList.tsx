import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCardState } from '../context/CardContext';
import { setLocalStorage } from '../utils/localStorage';

import CardPreview from './CardPreview';

const CardPreviewList = () => {
  const cardList = useCardState();

  useEffect(() => {
    setLocalStorage('cardList', cardList);
  }, [cardList]);

  return (
    <CardPreviewListWrapper>
      {cardList.map(({ cardNumbers, cardExpirationDate, cardOwner }) => (
        <CardPreview
          cardNumbers={cardNumbers}
          cardOwner={cardOwner}
          cardExpirationDate={cardExpirationDate}
        />
      ))}
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 44px;
`;

export default CardPreviewList;
