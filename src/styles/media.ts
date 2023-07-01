import { css, CSSProp } from 'styled-components';

export interface DeviceProps {
	[key: string]: number;
}

const device: DeviceProps = {
	desktop: 1279,
	laptop: 1023,
	tablet: 767,
	miniTablet: 479,
	mobile: 319,
};

type DeviceCSSMethodObjType = Record<
	keyof typeof device,
	(literals: TemplateStringsArray) => CSSProp
>;

export const mediaQuery = Object.keys(device).reduce(
	(acc: DeviceCSSMethodObjType, label: string) => {
		acc[label] = (literals: TemplateStringsArray) =>
			css`
				@media only screen and (max-width: ${device[label]}px) {
					${css(literals)};
				}
			`;
		return acc;
	},
	{},
);
