import { useEffect, useState } from 'react';

import { usePostAdMutation } from '../../store/slices/apiSlice';
import * as S from './AddAdPage.styles';

export const AddAdPage = ({ setActiveAddAd }) => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [price, setPrice] = useState(null);
	const [postAd] = usePostAdMutation();
	const [errMsg, setErrMsg] = useState(null);

	useEffect(() => {
		setErrMsg('');
	}, [title]);

	const handlePost = async e => {
		e.preventDefault();
		try {
			await postAd({ title, description, price })
				.unwrap()
				.then(() => {
					setActiveAddAd(null);
					setTitle(null);
					setDescription(null);
					setPrice(null);
				});
		} catch (error) {
			setErrMsg('Заполните название');
		}
	};

	return (
		<S.AddAdPageBlock>
			<S.AddAdPageContent>
				<S.AddAdPageTitle>Новое объявление</S.AddAdPageTitle>

				<S.AddAdPageBtnCloseLine
					onClick={() => setActiveAddAd(null)}
				></S.AddAdPageBtnCloseLine>
				<S.AltBtnClose onClick={() => setActiveAddAd(null)} />
				<S.AddAdPageNewArt id='formNewArt' action='#'>
					<S.AddAdPageNewArtBlock>
						<label htmlFor='name'>Название</label>
						{errMsg && (
							<h3 style={{ color: 'red', marginBottom: '6px' }}>{errMsg}</h3>
						)}
						<S.AddAdPageNewArtInput
							type='text'
							name='name'
							id='formName'
							placeholder='Введите название'
							onChange={e => setTitle(e.target.value)}
						/>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlock>
						<label htmlFor='text'>Описание</label>
						<S.AddAdPageTextArea
							name='text'
							id='formArea'
							cols='auto'
							rows='10'
							placeholder='Введите описание'
							onChange={e => setDescription(e.target.value)}
						></S.AddAdPageTextArea>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlockPrice>
						<label htmlFor='price'>Цена</label>
						<S.AddAdPageNewArtInputPrice
							type='text'
							name='price'
							id='formName'
							placeholder='0'
							onChange={e => setPrice(e.target.value)}
						/>
						<S.AddAdPageNewArtInputPriceCover />
					</S.AddAdPageNewArtBlockPrice>

					<S.AddAdPageBtnPub onClick={e => handlePost(e)}>
						Опубликовать
					</S.AddAdPageBtnPub>
				</S.AddAdPageNewArt>
			</S.AddAdPageContent>
		</S.AddAdPageBlock>
	);
};
