import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
z-index: 20;
`;

const Modal = styled.div`
background-color: #fff;
width: 600px;
height: 600px;
`;

const Banner = styled.div`
width: 100%;
height: 200px;
background-image: url(${({ img }) => img});
background-size: cover;
background-position: center;
margin-bottom: 20px;
`;

const ModalSection = styled.div`
display: flex;
justify-content: space-between;
margin-left: 40px;
margin-right: 40px;
`;

const Addition = styled.button`
cursor: pointer;
background-color: #299B01;
border-color: transparent;
color: white;
height: 50px;
width: 120px;
font-size: 20px;
margin-top: 280px;
`;

const ModalSection2 = styled.div`
height: 400px;
display: flex;
align-self: flex-end;
justify-content: center;

`;


export const ModalItem = ({ openItem, setOpenItem }) => {

	function closeModal(e) {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	if (!openItem) return null;
	return (
		<Overlay id="overlay" onClick={closeModal}>


			<Modal>
				<Banner img={openItem.img} />
				<ModalSection>
					<div>{openItem.name}</div>
					<div>{openItem.price.toLocaleString('ru-Ru',
						{ style: 'currency', currency: 'RUB' })}</div>
				</ModalSection>
				<ModalSection2>
					<div>
						<Addition>
							Добавить
						</Addition>
					</div>
				</ModalSection2>
			</Modal>
		</Overlay>
	)
};