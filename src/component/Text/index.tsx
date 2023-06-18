import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
	kind?: 'header' | 'body' | 'registerButton';
}

const StlyedText = styled.span<TextProps>`
	// default style
	font-family: 'HANNA-11yrs';
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;

	${(props) =>
		props.kind === 'header' &&
		css`
			font-family: 'DoHyeon';
			font-weight: 400;
			font-size: 24px;
			line-height: 19px;
		`}

	${(props) =>
		props.kind === 'body' &&
		css`
			font-family: 'JUA';
			font-weight: 700;
			font-size: 14px;
			line-height: 16px;
			color: #575757;
			opacity: 0.9;
		`}

	${(props) =>
		props.kind === 'registerButton' &&
		css`
			font-family: 'JUA';
			font-weight: 400;
			font-size: 30px;
			line-height: 35px;
			color: #575757;
		`}
`;

const Text = ({ children, ...rest }: PropsWithChildren<TextProps>) => (
	<StlyedText {...rest}>{children}</StlyedText>
);

export default Text;
