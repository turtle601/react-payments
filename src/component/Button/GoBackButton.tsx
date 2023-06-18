import LinkButton from '@/component/Button/LinkButton';
import React from 'react';
import styled from 'styled-components';

const StyledGoBackButton = styled.span`
	&::after {
		content: '';
		display: inline-block;
		width: 14px;
		height: 14px;
		border-bottom: 5px solid #525252;
		border-left: 5px solid #525252;

		transform: rotate(41.71deg);
	}
`;

const GoBackButton = () => (
	<LinkButton to={-1}>
		<StyledGoBackButton />
	</LinkButton>
);

export default GoBackButton;
