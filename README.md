# Cookier

[![MIT License](https://img.shields.io/github/license/Decaded/Cookier)](https://github.com/Decaded/Cookier/blob/master/LICENSE.md)
![Minified Size](https://img.shields.io/github/size/Decaded/Cookier/cookier.js?label=JS%20Size)

**Cookier** is a lightweight, customizable cookie consent banner that informs users about cookie usage. It includes a simple "accept" button and a link for more information about
cookies.

[Demo website](https://decaded.dev/dev/Cookier/)

## Features

- **Cookie consent banner**: Displays a notification informing users about cookies.
- **Accept button**: Users can close the banner using a close (X) button, which stores a cookie in their browser.
- **Learn more link**: A customizable link that explains what cookies are.
- **Responsive design**: The banner adjusts for different screen sizes.

## How to use

To implement Cookier in your project, follow these steps:

1. Place the following HTML snippet where you'd like the cookie consent banner to appear in your code (typically just inside the `<body>` tag):

```html
<div id="cookierBanner" class="cookierAlert">
  <p>It doesn't change anything, but we must inform you that we use cookies.</p>
  <a href="https://www.cookiesandyou.com/" target="_blank">What are cookies?</a>
  <button id="closeCookierButton" class="closeCookierButton">X</button>
</div>
```

2. Place [cookier.css](https://github.com/Decaded/Cookier/blob/master/cookier.css) in your project CSS folder (or wherever you hold styles) and link it:

```html
<link rel="stylesheet" href="css/cookier.css"/>
```

3. Include [cookier.js](https://github.com/Decaded/Cookier/blob/master/cookier.js) in your project JS folder (or wherever you hold scripts) and link it:

```html
<script src="js/cookier.js"></script>
```

## Customization

You can easily:

- Change the consent message and link in the HTML.
- Adjust the look and feel by modifying the CSS.
- Change the cookie expiration or behavior by editing the JavaScript.

## Browser Support

Works in all modern browsers. Tested on Chrome, Firefox, Edge, and Safari.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Like what I do?

If you find this project helpful or fun to use, consider supporting me on Ko-fi! Your support helps me keep creating and improving.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L02XV6J)
