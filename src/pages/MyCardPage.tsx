import React from 'react';
import styled from 'styled-components';

import Header from '@/component/Header';
import Text from '@/component/Text';

import LinkButton from '@/component/Button/LinkButton';

const StyledCardRegisterButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 208px;
	height: 123px;
	background-color: #e5e5e5;
	border-radius: 5px;
`;

const StyledMyCardContentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 28px;

	span + button {
		margin-top: 12px;
	}
`;

const MyCardPage = () => (
	<>
		<Header title="보유카드" />
		<StyledMyCardContentWrapper>
			<Text kind="body">새로운 카드를 등록해주세요.</Text>
			<LinkButton to="register">
				<StyledCardRegisterButton>
					<Text kind="registerButton">+</Text>
				</StyledCardRegisterButton>
			</LinkButton>
		</StyledMyCardContentWrapper>
	</>
);

export default MyCardPage;
