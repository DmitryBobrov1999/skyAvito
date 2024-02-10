import { useEffect, useState } from 'react';
import {
	useDeleteImgMutation,
	useEditAdMutation,
	usePostImgMutation,
} from '@store/slices/apiSlice';
import * as S from './EditAdPage.styles';
import { useMediaQuery } from '@uidotdev/usehooks';

export const EditAdPage = ({ setActiveEditAd, specificAd }) => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [price, setPrice] = useState(null);
	const [editAd] = useEditAdMutation();
	const [postImg] = usePostImgMutation();
	const [deleteImg] = useDeleteImgMutation();
	const [changer, setChanger] = useState(false);
	const [hover, setHover] = useState(false);
	const [arrayLength, setArrayLength] = useState(5);
	const titleInput = document.getElementById('formName');
	const descriptionInput = document.getElementById('formArea');
	const priceInput = document.getElementById('formPrice');
	const isMobile = useMediaQuery('(max-width: 590px)');

	useEffect(() => {
		setTitle(specificAd?.title);
		setDescription(specificAd?.description);
		setPrice(specificAd?.price);
	}, [specificAd?.title, specificAd?.description, specificAd?.price]);

	useEffect(() => {
		if (
			titleInput?.defaultValue === title &&
			descriptionInput?.defaultValue === description &&
			priceInput?.defaultValue == price
		) {
			setChanger(false);
		} else {
			setChanger(true);
		}
	}, [
		titleInput?.defaultValue,
		title,
		descriptionInput?.defaultValue,
		description,
		priceInput?.defaultValue,
		price,
	]);

	useEffect(() => {
		if (isMobile) {
			setArrayLength(3);
		} else {
			setArrayLength(5);
		}
	}, [isMobile]);

	const handleEdit = async e => {
		e.preventDefault();

		await editAd({ title, description, price, specificAd })
			.unwrap()
			.then(() => {
				setChanger(false);
				setActiveEditAd(null);
			});
	};

	const imageUpload = async e => {
		e.preventDefault();
		const files = e.target.files[0];
		if (files) {
			postImg({ files, specificAd }).unwrap();
		}
	};

	const ImagesBlock = ({ arrayLength }) => {
		const imageBlocks = [];

		for (let i = 0; i < arrayLength; i++) {
			imageBlocks.push(
				<S.AddAdPageImg key={i}>
					<S.AddAdPageLabel htmlFor={`html${i}`}>
						<S.AddAdPageImgCover
							onChange={e => imageUpload(e)}
							accept='image/*'
							id={`html${i}`}
							type='file'
							multiple
						/>
						<S.AddAdPageLabelDiv />
					</S.AddAdPageLabel>
					{specificAd?.images?.[i] && (
						<>
							<img
								style={
									specificAd?.images?.[i]
										? { visibility: 'visible' }
										: { visibility: 'hidden' }
								}
								src={`http://localhost:8090/${specificAd?.images?.[i]?.url}`}
								alt=''
							/>
							<S.AddAdPageDeleteDiv
								onClick={() => {
									const files = specificAd?.images?.[i];

									deleteImg({ specificAd, files });
								}}
							/>
						</>
					)}
				</S.AddAdPageImg>
			);
		}
		return imageBlocks;
	};

	return (
		<S.AddAdPageBlock>
			<S.AddAdPageContent>
				<S.AltBtnCloseCommentsMin onClick={() => setActiveEditAd(null)} />
				<S.AddAdPageTitle>
					{arrayLength === 3 ? 'Редактировать' : 'Редактировать объявление'}
				</S.AddAdPageTitle>
				<S.AddAdPageBtnClose onClick={() => setActiveEditAd(null)}>
					<S.AddAdPageBtnCloseLine></S.AddAdPageBtnCloseLine>
				</S.AddAdPageBtnClose>
				<S.AddAdPageNewArt id='formNewArt' action='#'>
					<S.AddAdPageNewArtBlock>
						<label htmlFor='title'>Название</label>
						<S.AddAdPageNewArtInput
							type='text'
							name='title'
							id='formName'
							placeholder='Введите название'
							defaultValue={specificAd?.title}
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
							defaultValue={specificAd?.description}
							onChange={e => setDescription(e.target.value)}
						></S.AddAdPageTextArea>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlock>
						<S.AddAdPageP>
							Фотографии товара<span>не более 5 фотографий</span>
						</S.AddAdPageP>
						<S.AddAdPageBarImg>
							<ImagesBlock arrayLength={arrayLength} />
						</S.AddAdPageBarImg>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlockPrice>
						<label htmlFor='price'>Цена</label>
						<S.AddAdPageNewArtInputPrice
							type='text'
							name='price'
							id='formPrice'
							defaultValue={specificAd?.price}
							onChange={e => setPrice(e.target.value)}
						/>
						<S.AddAdPageNewArtInputPriceCover></S.AddAdPageNewArtInputPriceCover>
					</S.AddAdPageNewArtBlockPrice>

					<S.AddAdPageBtnPub
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
						onClick={e => handleEdit(e)}
						disabled={changer ? false : true}
					>
						Сохранить
					</S.AddAdPageBtnPub>
				</S.AddAdPageNewArt>
			</S.AddAdPageContent>
		</S.AddAdPageBlock>
	);
};
