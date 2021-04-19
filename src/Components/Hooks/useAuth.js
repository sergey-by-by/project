import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
	const [authentication, setAuthentication] = useState(null);

	const provider = new authFirebase.GoogleAuthProvider();


	const auth = authFirebase();


	const logIn = () => auth.signInWithPopup(provider);

	const logOut = () => auth.signOut()
		.catch(err => console.error())

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			console.log(user);
			if (user) {
				setAuthentication(user)
			} else {
				setAuthentication(null)
			}
		})
	}, [authentication]);

	return { authentication, logIn, logOut };
}