class NotLoginError extends Error {
	constructor() {
		super( 'User not found' );
	}
}
