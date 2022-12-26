
const header = document.getElementsByTagName('header')
const footer = document.getElementsByTagName('footer')

header[0].innerHTML = `
    <nav class="header__nav flex">
        <div class="header__nav__logo-box flex">
            <img src="./img/logo.png" alt="My learning journal logo">
            <h1 class="lh1-25">My learning journal</h1>
        </div>
        <div class="header__nav__link-box flex">
            <ul class="flex">
                <li><a class="lh1-25" href="./index.html">Home</a></li>
                <li><a class="lh1-25" href="./about.html">About me</a></li>
            </ul>
        </div>
    </nav>
`

footer[0].innerHTML = `
    <h3 class="footer__heading">My Learning Journal</h3>
    <p class="footer__desc">Copyright ©2022</p>
`