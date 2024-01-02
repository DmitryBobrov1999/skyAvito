import styled from 'styled-components';
import { device } from '../../breakPoints';

export const ProfilePageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ProfilePageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
	backdrop-filter: blur(2px);
	@media ${device.min} {
		width: 100%;
		min-width: 320px;
		height: auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

export const ProfilePageHeaderLogo = styled.div`
	display: block;
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageMainLittleSvg = styled.div`
	display: none;

	@media ${device.min} {
		display: flex;
		z-index: 20;
	}
`;

export const ProfilePageMain = styled.main`
	@media ${device.max} {
		width: 100%;
	}
	@media ${device.min} {
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const ProfilePageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0 0 79px;
	@media ${device.max} {
		padding: 0;
		height: auto;
		display: grid;
		flex-direction: column;
		align-items: center;
	}
	@media ${device.min} {
		padding: 85px 0 0 0;
		width: 100%;
		min-width: 320px;
	}
`;

export const ProfilePageMainCenterBlock = styled.div`
	@media ${device.min} {
		margin: 0 auto;
		padding: 0 20px;
	}
`;

export const ProfilePageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	width: 100%;
	padding: 31px 10px 64px;
	@media ${device.max} {
		display: grid;
		grid-template-columns: repeat(2, 270px);
		justify-content: space-evenly;
	}
	@media ${device.average} {
		grid-template-columns: repeat(2, 270px);
	}
	@media ${device.min} {
		display: none;
	}
`;

export const ProfilePageMainH2Div = styled.div`
	@media ${device.max} {
		padding: 0 0 0 30px;
	}
	@media ${device.average} {
	}
	@media ${device.min} {
		grid-template-columns: repeat(2, 137px);
	}
`;

export const ProfilePageMainH2Div2 = styled.div`
	@media ${device.max} {
		padding: 0 0 0 30px;
	}
	@media ${device.average} {
		grid-template-columns: repeat(2, 270px);
	}
	@media ${device.min} {
		grid-template-columns: repeat(1, 270px);
		justify-content: space-between;
		padding: 0;
	}
`;

export const ProfilePageMainH2 = styled.h2`
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 42px;
	color: #000000;
	margin-bottom: 30px;
	@media ${device.min} {
		font-size: 24px;
		line-height: 29px;
		color: #000000;
		margin-bottom: 20px;
	}
`;

export const ProfilePageMainProfile = styled.div`
	width: 100%;
	padding: 0 0 70px;
	@media ${device.min} {
		width: 100%;
		padding: 0 0 40px;
	}
`;

export const ProfilePageProfileContent = styled.div`
	width: 100%;
	margin: 0 auto;
	@media ${device.min} {
		width: 100%;
		margin: 0 auto;
	}
`;

export const ProfilePageProfileTitle = styled.h3`
	font-size: 32px;
	font-weight: 500;
	line-height: 70px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 20px;
	@media ${device.min} {
		margin-bottom: 30px;
		font-size: 18px;
		font-weight: 500;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}
`;

export const ProfilePageProfileSettings = styled.div`
	display: flex;
	align-items: top;
	@media ${device.max} {
		flex-direction: column;

		flex-wrap: wrap;
		align-items: center;
	}
	@media ${device.min} {
	}
`;

export const ProfilePageSettingsLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 43px;
	@media ${device.min} {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 0;
	}
`;

export const ProfilePageSettingDiv = styled.div`
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background-color: #f0f0f0;
	@media ${device.min} {
		width: 132px;
		height: 132px;
	}
`;

export const ProfilePageSettingsImg = styled.img`
	width: 100%;
	height: auto;
	display: block;
	border-radius: 50%;
	object-fit: cover;
`;

export const ProfilePageChangePhotoDiv = styled.div`
	text-align: center;
	position: relative;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	height: 24px;
	@media ${device.min} {
		display: inline-block;
		margin-bottom: 30px;
	}
`;

export const ProfilePageChangePhoto = styled.input`
	visibility: hidden;
	opacity: 0;
	position: absolute;
	width: 74px;
	height: inherit;
`;

export const ProfilePageChangePhotoLabel = styled.label`
	cursor: pointer;
	width: 74px;
`;

export const PageProfileChangePhotoSpan = styled.span`
	color: #009ee4;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
`;

export const ProfilePageSettingsRight = styled.div`
	width: 630px;
	@media ${device.min} {
		width: 100%;
	}
`;

export const ProfilePageSettingsForm = styled.form`
	width: 630px;
	display: flex;
	flex-wrap: wrap;

	& input {
		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		padding: 12px 19px;
		color: rgba(0, 0, 0, 1);
		outline: none;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		&:focus {
			border: 1px solid rgba(0, 158, 228, 1);
		}
		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
		}
	}
	& input:focus ~ label,
	label:focus {
		color: rgba(0, 158, 228, 1);
	}

	& label {
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		color: #c4c4c4;
		margin-bottom: 4px;
		display: block;
	}
	@media ${device.min} {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		& input {
			border-radius: 30px;
			padding: 9px 17px;
			min-width: 279px;
			width: 100%;
			&::placeholder {
				font-size: 14px;
				line-height: 21px;
			}
		}

		& label {
			font-size: 14px;
			line-height: 21px;
			color: #c4c4c4;
			margin-bottom: 6px;
		}
	}
`;

export const ProfilePageSettingsDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin: 0 0 18px;
`;

export const ProfilePageSettingsFname = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsLname = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsCity = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsPhone = styled.input`
	width: 614px;
`;

export const ProfilePageSettingsBtn = styled.button`
	font-size: 16px;
	line-height: 1;
	color: #ffffff;
	width: 154px;
	height: 50px;
	margin: 10px 7px 0;
	border-radius: 6px;
	border: 1px solid;
	@media ${device.min} {
		width: 278px;
		height: 46px;
		border-radius: 6px;
		margin: 18px 0 0 0;
	}
`;

export const ProfilePageCards = styled.div`
	max-width: 1158px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;
	justify-content: center;

	overflow-y: auto;
	scrollbar-color: #ffffff #2e2e2e; // Firefox
	scrollbar-width: thin; // Firefox
	scrollbar-width: 0px; // Firefox

	@media ${device.max} {
		grid-template-columns: repeat(3, 270px);
		justify-content: space-evenly;
	}

	@media ${device.average} {
		grid-template-columns: repeat(2, 270px);
		grid-auto-rows: 441px;
	}

	@media ${device.min} {
		grid-template-columns: repeat(2, 137px);
		grid-auto-rows: 293px;
		grid-gap: 10px 10px;
		padding-bottom: 30px;
	}
`;

export const ProfilePageCardsItem = styled.div`
	margin: 0;
	@media ${device.min} {
		margin: 0;
		box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		width: 137px;
		height: auto;
	}
`;

export const ProfilePageCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
	@media ${device.min} {
		width: 137px;
		height: auto;
		display: flex;
		flex-direction: column;
	}
`;

export const ProfilePageCardsImg = styled.div`
	width: 270px;
	height: 270px;
	background-color: #f0f0f0;

	& img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
	@media ${device.min} {
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		width: 137px;
		height: 132px;
		background-color: #d9d9d9;

		& img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
		}
	}
`;

export const ProfilePageCardsTitle = styled.h3`
	height: 52px;
	font-size: 22px;
	font-weight: 500;
	line-height: 26px;
	color: #009ee4;
	margin-bottom: 10px;
	margin-top: 20px;
	overflow: hidden;
	text-overflow: ellipsis;

	@media ${device.min} {
		height: 51px;
		font-size: 14px;
		line-height: 17px;
		color: #009ee4;
		margin-bottom: 10px;
		margin-top: 10px;
	}
`;

export const ProfilePageCardContent = styled.div`
	@media ${device.min} {
		height: 161px;
		padding: 10px 10px 20px 10px;
	}
`;

export const ProfilePageCardsPrice = styled.p`
	color: #000000;
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	margin-bottom: 10px;
	@media ${device.min} {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const ProfilePageCardsPlace = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;

export const ProfilePageCardsDate = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;

export const ProfilePageMenuBtn = styled.button`
	width: 241px;
	height: 50px;
	border-radius: 6px;
	border: 1px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	color: rgba(255, 255, 255, 1);
	margin-left: 60px;
	background: rgba(0, 158, 228, 1);

	&:hover {
		background-color: #0080c1;
	}
	@media ${device.min} {
		display: none;
	}
`;
