import styled from 'styled-components';
import { device } from '../breakPoints';

export const LoginPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
`;

export const LoginPageContainerEnter = styled.div`
	max-width: 100%;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #f4f5f6;
`;

export const LoginPageModalBlock = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${device.minAverage} {
		z-index: 2;
		position: absolute;
		top: 55px;
		opacity: 1;
		left: calc(50% - (320px / 2));
	}
`;

export const LoginPageModalForm = styled.form`
	width: 366px;
	background-color: #ffffff;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 43px 47px 47px 40px;
	@media ${device.minAverage} {
		width: 320px;
		height: auto;
		background-color: #ffffff;
		border-radius: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 20px;
	}
`;

export const LoginPageModalLogo = styled.div`
	width: 140px;
	height: 21px;
	margin-bottom: 42px;
	background-color: transparent;

	& img {
		width: 140px;
		height: auto;
	}

	@media ${device.minAverage} {
		width: 120px;
		height: 18px;
		margin-bottom: 30px;
		background-color: transparent;

		& img {
			width: 120px;
			height: auto;
		}
	}
`;

export const LoginPageModalInput = styled.input`
	width: 100%;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #d0cece;
	padding: 8px 1px;
	margin-bottom: 38px;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05000000074505806px;
	text-align: left;
	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}
	@media ${device.minAverage} {
		width: 100%;
		border: 1px solid #d0cece;
		padding: 9px 17px;
		border-radius: 30px;

		&::placeholder {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 21px;
			color: #b3b3b3;
		}
	}
`;

export const LoginPageModalBtnEnter = styled.button`
	width: 278px;
	height: 52px;
	background-color: #009ee4;
	border-radius: 6px;
	margin-top: 22px;
	margin-bottom: 20px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05000000074505806px;
	text-align: left;
	color: rgba(255, 255, 255, 1);

	&:hover {
		background-color: #0080c1;
	}

	& a {
		width: 100%;
		height: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media ${device.minAverage} {
		height: 46px;
		margin-top: 40px;
		margin-bottom: 10px;
		border: none;

		& a {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export const LoginPageModalBtnSignup = styled.button`
	width: 278px;
	height: 52px;
	background-color: transparent;
	border: 1px solid #d0cece;
	border-radius: 6px;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: -0.05px;
	color: rgba(0, 0, 0, 1);

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #f4f5f6;
	}

	& a {
		width: 100%;
		height: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media ${device.minAverage} {
		height: 46px;
		border: 1px solid #d9d9d9;
		font-size: 16px;
		line-height: 24px;

		& a {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;
