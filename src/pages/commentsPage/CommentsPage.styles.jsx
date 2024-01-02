import styled from 'styled-components';
import { device } from '../../breakPoints';

export const CommentsPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CommentsPageContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
	background-color: #f4f5f6;
	position: absolute;
	top: 0;
	left: 50%;
`;

export const CommentsPageModalBlock = styled.div`
	position: fixed;
	z-index: 10;
	left: calc(50% - (800px / 2));
	top: 60px;
	opacity: 1;
	@media ${device.max} {
		top: 79px;
	}
	@media ${device.min} {
		position: absolute;
		z-index: 5;
		left: 0px;
		top: 55px;
		opacity: 1;
		z-index: 20;
		width: 100%;
	}
`;

export const CommentsPageModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 800px;
	height: 100vh;
	padding: 20px 92px 57px 50px;
	background-color: #ffffff;
	border-radius: 12px;
	border: 1px solid grey;
	@media ${device.max} {
		width: 100%;
		height: calc(100vh - 79px);
	}
	@media ${device.min} {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		min-width: 320px;
		padding: 30px 20px 30px;
		border-radius: 0;
	}
`;

export const CommentsPageModalTitle = styled.h3`
	font-size: 32px;
	line-height: 46px;
	font-weight: 500;
	color: #000000;
	margin-bottom: 15px;
	@media ${device.min} {
		font-size: 24px;
		line-height: 29px;
		padding: 0 0 0 26px;
		position: relative;
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

export const CommentsPageModalBtnClose = styled.div`
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

export const CommentsPageModalBtnCloseLine = styled.div`
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
	&:hover {
		&::after,
		&::before {
			background-color: #0080c1;
		}
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`;

export const CommentsPageModalScroll = styled.div`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	overflow-y: auto;
	scrollbar-color: #ffffff #2e2e2e;
	scrollbar-width: thin;
	scrollbar-width: 0px;

	&::-webkit-scrollbar {
		width: 0px;
		background-color: #ffffff;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #d9d9d9;
		border-radius: 0px;
	}
`;

export const CommentsPageModalFormNewArt = styled.form`
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const CommentsPageModalNewArtBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 14px;
	& label {
		margin-bottom: 14px;
		font-size: 16px;
		line-height: 32px;
		font-weight: 600;
		color: #000000;
	}
	@media ${device.min} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 16px;
	}

	& label {
		display: none;
	}
`;

export const CommentsPageFormNewAreaTextArea = styled.textarea`
	font-family: 'Roboto', sans-serif;
	padding: 10px 19px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	font-size: 16px;
	line-height: 1;
	width: 100%;
	height: 100px;
	max-height: 100px;

	&::placeholder {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #0000004d;
	}
	@media ${device.min} {
		font-family: 'Roboto', sans-serif;
		width: 100%;
		max-height: 107px;
		padding: 9px 17px;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 30px;
		font-size: 16px;
		line-height: 1;

		&::placeholder {
			font-size: 14px;
			line-height: 21px;
			color: #c4c4c4;
		}
	}
`;

export const CommentsPageFormBtnPub = styled.button`
	width: 181px;
	height: 50px;
	border: 1px solid;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	@media ${device.min} {
		margin-top: 0px;
		width: 100%;
		height: 46px;
		background-color: #009ee4;
	}
`;

export const CommentsPageModalReviews = styled.div`
	width: 100%;
	height: 100vh;
`;

export const CommentsPageReviewsItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const CommentsPageReviewLeft = styled.div`
	margin-right: 12px;
`;

export const CommentsPageReviewImg = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #f0f0f0;
	margin-top: 30px;
	& img {
		border-radius: 50%;
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

export const CommentsPageReviewRight = styled.div`
	display: block;
`;

export const CommentsPageReviewName = styled.div`
	font-size: 16px;
	line-height: 32px;
	color: #000000;
	margin-bottom: 12px;
	margin-top: 30px;
	font-weight: 600;

	& span {
		margin-left: 10px;
		color: #5f5f5f;
	}
	@media ${device.min} {
		font-size: 14px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: 0em;
		text-align: left;
		& span {
			font-size: 14px;
			font-weight: 400;
			line-height: 28px;
			letter-spacing: 0em;
			text-align: left;
		}
	}
`;

export const CommentsPageReviewTitle = styled.h5`
	font-size: 16px;
	line-height: 32px;
	color: #000000;
	@media ${device.min} {
		font-size: 16px;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: 0em;
		text-align: left;
	}
`;

export const CommentsPageReviewText = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;

	@media ${device.min} {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}
`;
