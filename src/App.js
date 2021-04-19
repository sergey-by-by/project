import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrder';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
	apiKey: "AIzaSyA8E_G0gWaZxYoFcnp7OK4HCBms8-yY6ng",
	authDomain: "mrdonalds-f5e01.firebaseapp.com",
	projectId: "mrdonalds-f5e01",
	storageBucket: "mrdonalds-f5e01.appspot.com",
	messagingSenderId: "842249639073",
	appId: "1:842249639073:web:09deb83662c3cab3b30ce0"
};

firebase.initializeApp(firebaseConfig);

function App() {

	const auth = useAuth(firebase.auth);

	const openItem = useOpenItem();
	const orders = useOrders();



	return (
		<>
			<GlobalStyle />
			<NavBar {...auth} />
			<Order {...orders} {...openItem} {...auth} />
			<Menu {...openItem} />
			{openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
	);
}

export default App;
