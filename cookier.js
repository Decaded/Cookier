/*
* Cookie alert by Decaded
* https://github.com/Decaded/Cookier
* Released under MIT license
*/

// Function to set a cookie
function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expiry time
	const expires = 'expires=' + date.toUTCString();
	document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Function to get a cookie by name
function getCookie(name) {
	const cookies = document.cookie.split(';');
	for (let cookie of cookies) {
		cookie = cookie.trim();
		if (cookie.indexOf(name + '=') === 0) {
			return cookie.substring((name + '=').length, cookie.length);
		}
	}
	return null;
}

// Function to show the cookie banner
function showCookieBanner() {
	const banner = document.getElementById('cookierBanner');
	banner.classList.add('show');
}

// Check if the cookie is set
const cookieName = 'Cookier';
if (!getCookie(cookieName)) {
	showCookieBanner();
}

// Handle click on "Close (X)" button
document.getElementById('close-btn').addEventListener('click', function () {
	setCookie(cookieName, 'true', 365); // Set cookie for 1 year
	document.getElementById('cookierBanner').classList.remove('show');
});
