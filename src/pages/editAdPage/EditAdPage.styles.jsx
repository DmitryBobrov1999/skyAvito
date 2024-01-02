import styled from 'styled-components';
import { device } from '../../breakPoints';

export const AddAdPageBlock = styled.div`
	position: fixed;
	z-index: 10;
	left: calc(50% - (600px / 2));
	top: 60px;
	opacity: 1;
	@media ${device.max} {
		top: 79px;
		opacity: 1;
		z-index: 5;
	}
	@media ${device.min} {
		top: 55px;
		left: 0;
		width: 100%;
	}
`;

export const AddAdPageContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 600px;
	height: auto;
	padding: 32px 50px 42px;
	background-color: #ffffff;
	border-radius: 12px;
	border: 1px solid grey;
	@media ${device.min} {
		width: 100%;
		min-width: 320px;
		height: auto;
		padding: 30px 20px 30px;
	}
`;

export const AddAdPageTitle = styled.h3`
	font-size: 32px;
	line-height: 46px;
	font-weight: 500;
	color: #000000;
	&:hover::before {
		border-top: 2px solid #0080c1;
		border-left: 2px solid #0080c1;
	}
	@media ${device.min} {
		font-size: 24px;
		line-height: 29px;
		padding: 0 0 0 26px;
		position: relative;

		&::before {
			display: none;
			content: '';

			width: 12px;
			height: 12px;
			background-color: transparent;
			border-top: 2px solid #000000;
			border-left: 2px solid #000000;
			transform: rotate(-45deg);
			position: absolute;
			top: 9px;
			left: 0;
			cursor: pointer;
		}
	}
`;

export const AltBtnCloseCommentsMin = styled.div`
	display: none;
	@media ${device.min} {
		display: flex;
		font-size: 24px;
		line-height: 29px;
		padding: 0 0 0 26px;
		position: relative;
		&::before {
			z-index: 20;
			content: '';
			display: flex;
			width: 12px;
			height: 12px;
			background-color: transparent;
			border-top: 2px solid #000000;
			border-left: 2px solid #000000;
			transform: rotate(-45deg);
			position: absolute;
			top: 10px;
			left: 0;
			cursor: pointer;
		}
	}
`;

export const AddAdPageBtnClose = styled.div`
	width: 23px;
	height: 23px;
	position: absolute;
	top: 47px;
	right: 50px;
	z-index: 3;
	cursor: pointer;
	@media ${device.min} {
		display: none;
	}
`;

export const AddAdPageBtnCloseLine = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	&::after,
	&::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		border-radius: 2px;
		background-color: #d9d9d9;
		top: 47%;
		right: -4px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
	&:hover {
		&::after,
		&::before {
			background-color: #0080c1;
		}
	}
`;

export const AddAdPageNewArt = styled.form`
	margin-top: 22px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const AddAdPageNewArtBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	& label {
		margin-bottom: 4px;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
	}
`;

export const AddAdPageNewArtInput = styled.input`
	padding: 13px 19px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	font-size: 16px;
	line-height: 1;
	width: 100%;
	font-size: 16px;
	line-height: 24px;

	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #0000004d;
	}
`;

export const AddAdPageTextArea = styled.textarea`
	font-family: 'Roboto', sans-serif;
	width: 100%;
	max-height: 200px;
	font-size: 16px;
	line-height: 24px;
	padding: 13px 19px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	font-size: 16px;
	line-height: 1;

	&::placeholder {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #0000004d;
	}
`;

export const AddAdPageP = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	margin-bottom: 10px;

	& span {
		margin-left: 10px;
		color: rgba(0, 0, 0, 0.3);
	}
`;

export const AddAdPageBarImg = styled.div`
	width: 500px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;

	@media ${device.min} {
		width: 100%;
		justify-content: space-around;
	}
`;

export const AddAdPageImg = styled.div`
	width: 90px;
	height: 90px;
	margin-right: 10px;
	position: relative;
	z-index: 0;

	& img {
		display: block;
		width: 100%;
		height: 100%;
		height: auto;
		object-fit: cover;
		z-index: 2;
	}
`;

export const AddAdPageLabel = styled.label`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #f0f0f0;
	z-index: -1;
	cursor: pointer;
	&::after,
	&::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		border-radius: 2px;
		background-color: #d9d9d9;
		top: 50%;
		right: calc(50% - (30px / 2));
	}

	&::before {
		transform: rotate(90deg);
	}
`;

export const AddAdPageLabelDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #f0f0f0;
	z-index: -1;
	cursor: pointer;
	&::after,
	&::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		border-radius: 2px;
		background-color: #d9d9d9;
		top: 50%;
		right: calc(50% - (30px / 2));
	}

	&::before {
		transform: rotate(90deg);
	}
`;

export const AddAdPageImgCover = styled.input`
	cursor: pointer;
	visibility: hidden;
`;

export const AddAdPageNewArtBlockPrice = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	& label {
		margin-bottom: 4px;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
	}
`;

export const AddAdPageNewArtInputPrice = styled.input`
	width: 200px;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	padding: 13px 19px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	font-size: 16px;
	line-height: 1;

	&::placeholder {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #0000004d;
	}
	@media ${device.min} {
		width: 100%;
		min-width: 278px;
	}
`;

export const AddAdPageNewArtInputPriceCover = styled.div`
	width: 24px;
	height: 24px;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	position: absolute;
	bottom: 13px;
	left: 170px;
	z-index: 0;
	background-color: #ffffff;
	&::after {
		content: '₽';
		width: 24px;
		height: 24px;
		position: absolute;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
		z-index: 2;
	}
	@media ${device.min} {
		left: 90%;

		&::after {
			content: '₽';
			width: 24px;
			height: 24px;
			position: absolute;
			font-size: 16px;
			line-height: 24px;
			color: #000000;
			z-index: 2;
		}
	}
`;

export const AddAdPageBtnPub = styled.button`
	margin-top: 10px;
	width: 181px;
	height: 50px;
	background: #d9d9d9;
	border: 1px solid #d9d9d9;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	&:hover {
		background-color: #0080c1;
	}
	@media ${device.min} {
		min-width: 278px;
		width: 100%;
	}
`;

export const AddAdPageDeleteDiv = styled.div`
	cursor: pointer;
	position: absolute;
	top: 0px;
	left: 78px;
	z-index: 10;
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 20px;
		height: 3px;
		background: gray;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
	@media ${device.min} {
		left: 85%;
	}
`;
