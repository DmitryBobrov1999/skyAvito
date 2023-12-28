import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Spinner } from '../../components/spinner/Spinner';
import { useMyAdsQuery } from '../../store/slices/apiSlice';

import {
	useChangeAvatarMutation,
	useChangeInfoMutation,
} from '../../store/slices/userApiSlice';
import { AddAdPage } from '../addAd/AddAdPage';
import * as S from './MyProfilePage.styles';

export const ProfilePage = ({ user, isLoading, token }) => {
	const [name, setName] = useState(null);
	const [surname, setSurname] = useState(null);
	const [phone, setPhone] = useState(null);
	const [city, setCity] = useState(null);
	const [changer, setChanger] = useState(false);
	const [hover, setHover] = useState(false);
	const nameInput = document.getElementById('fname');
	const surnameInput = document.getElementById('lname');
	const cityInput = document.getElementById('city');
	const phoneInput = document.getElementById('phone');
	const [changeInfo] = useChangeInfoMutation();
	const [changeAvatar] = useChangeAvatarMutation();
	const { data: dataAds } = useMyAdsQuery();

	const [activeAddAd, setActiveAddAd] = useState(null);

	useEffect(() => {
		(async () => {
			await setName(user?.name);
			await setSurname(user?.surname);
			await setPhone(user?.phone);
			await setCity(user?.city);
		})();
	}, [user?.name, user?.surname, user?.phone, user?.city]);

	useEffect(() => {
		if (
			nameInput?.defaultValue === name &&
			surnameInput?.defaultValue === surname &&
			cityInput?.defaultValue === city &&
			phoneInput?.defaultValue === phone
		) {
			setChanger(false);
		} else {
			setChanger(true);
		}
	}, [
		nameInput?.defaultValue,
		name,
		surnameInput?.defaultValue,
		surname,
		cityInput?.defaultValue,
		city,
		phoneInput?.defaultValue,
		phone,
	]);

	const handleClick = async e => {
		e.preventDefault();
		await changeInfo({ name, surname, phone, city });
		setChanger(false);
	};

	const changeAvHandler = async e => {
		const file = e.target.files[0];
		await changeAvatar({ file });
	};

	return (
		<>
			<S.ProfilePageWrapper
				style={
					activeAddAd && { WebkitFilter: 'blur(5px)', filter: 'blur(5px)' }
				}
			>
				{isLoading ? (
					<Spinner />
				) : (
					<S.ProfilePageContainer>
						<Header setActiveAddAd={setActiveAddAd} token={token} />
						<S.ProfilePageMain>
							<S.ProfilePageMainContainer>
								<S.ProfilePageMainCenterBlock>
									<S.ProfilePageMainMenu>
										<NavLink to='/'>
											<S.ProfilePageHeaderLogo>
												<svg
													width='55'
													height='40'
													viewBox='0 0 55 40'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M7.01887 37.9993C2.93424 40.3586 0 38.3925 0 34.8953C0 31.1723 0 20.0017 0 20.0017C0 20.0017 0 8.831 0 5.10805C0 1.61085 2.93242 -0.355308 7.01887 2.00408C13.3806 5.67787 32.4641 16.7029 32.4641 16.7029C35.0015 18.1684 35.0015 21.8331 32.4641 23.2986C32.4641 23.3004 13.3806 34.3255 7.01887 37.9993Z'
														fill='#00C1FF'
													/>
													<path
														d='M28.0233 37.9958C23.9386 40.3552 21.0044 38.3891 21.0044 34.8919C21.0044 31.1689 21.0044 19.9983 21.0044 19.9983C21.0044 19.9983 21.0044 8.82758 21.0044 5.10463C21.0044 1.60743 23.9368 -0.358726 28.0233 2.00066C34.2449 5.59435 52.9097 16.3772 52.9097 16.3772C55.6965 17.9866 55.6965 22.0099 52.9097 23.6192C52.9079 23.6192 34.2449 34.4021 28.0233 37.9958Z'
														fill='#BCEC30'
													/>
													<mask
														id='mask0_7_221'
														style={{ maskType: 'alpha' }}
														maskUnits='userSpaceOnUse'
														x='21'
														y='0'
														width='34'
														height='40'
													>
														<path
															d='M28.0233 37.9958C23.9386 40.3552 21.0044 38.3891 21.0044 34.8919C21.0044 31.1689 21.0044 19.9983 21.0044 19.9983C21.0044 19.9983 21.0044 8.82758 21.0044 5.10463C21.0044 1.60743 23.9368 -0.358726 28.0233 2.00066C34.2449 5.59435 52.9097 16.3772 52.9097 16.3772C55.6965 17.9866 55.6965 22.0099 52.9097 23.6192C52.9079 23.6192 34.2449 34.4021 28.0233 37.9958Z'
															fill='#6FE4FF'
														/>
													</mask>
													<g mask='url(#mask0_7_221)'>
														<g filter='url(#filter0_f_7_221)'>
															<path
																d='M7.01985 37.9992C2.93522 40.3586 0.000976562 38.3924 0.000976562 34.8952C0.000976562 31.1723 0.000976562 20.0016 0.000976562 20.0016C0.000976562 20.0016 0.000976562 8.83094 0.000976562 5.10799C0.000976562 1.61079 2.93339 -0.355369 7.01985 2.00402C13.3816 5.67781 32.4651 16.7028 32.4651 16.7028C35.0025 18.1684 35.0025 21.833 32.4651 23.2986C32.4651 23.3004 13.3816 34.3254 7.01985 37.9992Z'
																fill='#99D100'
															/>
														</g>
													</g>
													<defs>
														<filter
															id='filter0_f_7_221'
															x='-8.92848'
															y='-7.95649'
															width='52.2261'
															height='55.9162'
															filterUnits='userSpaceOnUse'
															colorInterpolationFilters='sRGB'
														>
															<feFlood
																floodOpacity='0'
																result='BackgroundImageFix'
															/>
															<feBlend
																mode='normal'
																in='SourceGraphic'
																in2='BackgroundImageFix'
																result='shape'
															/>
															<feGaussianBlur
																stdDeviation='4.46473'
																result='effect1_foregroundBlur_7_221'
															/>
														</filter>
													</defs>
												</svg>
											</S.ProfilePageHeaderLogo>
										</NavLink>

										<NavLink to='/'>
											<S.ProfilePageMenuBtn>
												Вернуться на&nbsp;главную
											</S.ProfilePageMenuBtn>
										</NavLink>
									</S.ProfilePageMainMenu>
									<S.ProfilePageMainH2Div>
										<S.ProfilePageMainH2>
											Здравствуйте, {user?.name}!
										</S.ProfilePageMainH2>
									</S.ProfilePageMainH2Div>

									<S.ProfilePageMainProfile>
										<S.ProfilePageProfileContent>
											<S.ProfilePageMainH2Div2>
												<S.ProfilePageProfileTitle>
													Настройки профиля
												</S.ProfilePageProfileTitle>
											</S.ProfilePageMainH2Div2>

											<S.ProfilePageProfileSettings>
												<S.ProfilePageSettingsLeft>
													<S.ProfilePageSettingDiv>
														<S.ProfilePageSettingsImg
															alt='avatar'
															src={`http://localhost:8090/${user?.avatar}`}
														/>
													</S.ProfilePageSettingDiv>
													<S.ProfilePageChangePhotoDiv>
														<S.ProfilePageChangePhoto
															id='input_file'
															placeholder='заменить'
															type='file'
															onChange={e => changeAvHandler(e)}
															accept='image/*'
														/>
														<S.ProfilePageChangePhotoLabel htmlFor='input_file'>
															<S.PageProfileChangePhotoSpan>
																заменить
															</S.PageProfileChangePhotoSpan>
														</S.ProfilePageChangePhotoLabel>
													</S.ProfilePageChangePhotoDiv>
												</S.ProfilePageSettingsLeft>
												<S.ProfilePageSettingsRight>
													<S.ProfilePageSettingsForm>
														<S.ProfilePageSettingsDiv>
															<S.ProfilePageSettingsFname
																id='fname'
																name='fname'
																type='text'
																onChange={e => {
																	setName(e.target.value);
																}}
																defaultValue={user?.name ? user?.name : ''}
															/>
															<label htmlFor='fname'>Имя</label>
														</S.ProfilePageSettingsDiv>

														<S.ProfilePageSettingsDiv>
															<S.ProfilePageSettingsLname
																id='lname'
																name='lname'
																type='text'
																onChange={e => {
																	setSurname(e.target.value);
																}}
																defaultValue={
																	user?.surname ? user?.surname : ''
																}
															/>
															<label htmlFor='lname'>Фамилия</label>
														</S.ProfilePageSettingsDiv>

														<S.ProfilePageSettingsDiv>
															<S.ProfilePageSettingsCity
																id='city'
																name='city'
																type='text'
																onChange={e => {
																	setCity(e.target.value);
																}}
																defaultValue={user?.city ? user?.city : ''}
															/>
															<label htmlFor='city'>Город</label>
														</S.ProfilePageSettingsDiv>

														<S.ProfilePageSettingsDiv>
															<S.ProfilePageSettingsPhone
																id='phone'
																name='phone'
																type='tel'
																onChange={e => {
																	setPhone(e.target.value);
																}}
																defaultValue={user?.phone ? user?.phone : ''}
																placeholder={user?.phone ? '' : '+79161234567'}
															/>
															<label htmlFor='phone'>Телефон</label>
														</S.ProfilePageSettingsDiv>

														<S.ProfilePageSettingsBtn
															onMouseEnter={() => {
																setHover(true);
															}}
															onMouseLeave={() => setHover(false)}
															style={
																changer
																	? {
																			background: hover ? '#0080c1' : '#009ee4',
																			border: '#009ee4',
																	  }
																	: {
																			background: 'rgba(217, 217, 217, 1)',
																			border: 'rgba(217, 217, 217, 1)',
																	  }
															}
															disabled={changer ? false : true}
															onClick={handleClick}
														>
															Сохранить
														</S.ProfilePageSettingsBtn>
													</S.ProfilePageSettingsForm>
												</S.ProfilePageSettingsRight>
											</S.ProfilePageProfileSettings>
										</S.ProfilePageProfileContent>
									</S.ProfilePageMainProfile>
									<S.ProfilePageMainH2Div2>
										<S.ProfilePageProfileTitle>
											Мои товары
										</S.ProfilePageProfileTitle>
									</S.ProfilePageMainH2Div2>
								</S.ProfilePageMainCenterBlock>
								<S.ProfilePageProfileContent>
									<S.ProfilePageCards>
										{dataAds &&
											dataAds.map(myAd => {
												const img = myAd?.images?.[0]?.url;
												return (
													<NavLink to={`/seller/${myAd?.id}`} key={myAd?.id}>
														<S.ProfilePageCardsItem>
															<S.ProfilePageCardsCard>
																<S.ProfilePageCardsImg>
																	<img
																		src={`http://localhost:8090/${img}`}
																		alt='myAd'
																	/>
																</S.ProfilePageCardsImg>
																<S.ProfilePageCardContent>
																	<S.ProfilePageCardsTitle>
																		{myAd?.title}
																	</S.ProfilePageCardsTitle>

																	<S.ProfilePageCardsPrice>
																		{myAd.price
																			.toString()
																			.replace(
																				/(\d)(?=(\d{3})+$)/g,
																				'$1 '
																			)}{' '}
																		₽
																	</S.ProfilePageCardsPrice>
																	<S.ProfilePageCardsPlace>
																		{myAd?.user?.city}
																	</S.ProfilePageCardsPlace>
																	<S.ProfilePageCardsDate>
																		{moment(myAd?.created_on).format('LLL')}
																	</S.ProfilePageCardsDate>
																</S.ProfilePageCardContent>
															</S.ProfilePageCardsCard>
														</S.ProfilePageCardsItem>
													</NavLink>
												);
											})}
									</S.ProfilePageCards>
								</S.ProfilePageProfileContent>
							</S.ProfilePageMainContainer>
						</S.ProfilePageMain>
						<Footer setActiveAddAd={setActiveAddAd} />
					</S.ProfilePageContainer>
				)}
			</S.ProfilePageWrapper>
			{activeAddAd && <AddAdPage setActiveAddAd={setActiveAddAd} />}
		</>
	);
};
