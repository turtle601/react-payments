import GoBackButton from '@/component/Button/GoBackButton';
import Text from '@/component/Text';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

interface HeaderProps {
	title: string;
}

const StyledWrapper = styled.header`
	padding: 30px;
`;

const Header = ({ title }: HeaderProps) => {
	const { pathname } = useLocation();
	const isHome = useMemo(() => pathname === '/', [pathname]);

	return (
		<StyledWrapper>
			{!isHome && <GoBackButton />}
			<Text kind="header">{title}</Text>
		</StyledWrapper>
	);
};

export default Header;
