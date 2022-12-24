class ShopHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="header-content">
                <div class="header-logo" id="logo">
                    <object data="/images/casino-logo.svg"
                          width="70"
                          height="70"
                          class="img-logo">
                    </object>
                    <h1>Bezhanoff Shop</h1>
                </div>
                <div class="navbar-content" id="headerNavContent">
                    <a href="#" id="aIndex" onclick="goToPage('index');">Главная</a>
                    <a href="#" id="aCatalog" onclick="goToPage('catalog');">ЛР 1</a>
                    <a href="#" id="aAscii" onclick="goToPage('ascii');">ASCII</a>
                    <a href="#" id="aTable" onclick="goToPage('table');">Таблица</a>
                    <a href="#" class="icon" onclick="hamburgerHandler();">&#9776;</a>
                </div>
            </div>
        `;

        let script = document.createElement("script");

        script.innerHTML = `
            function hamburgerHandler() {
                var nav = document.getElementById("headerNavContent");
                var logo = document.getElementById("logo");
                
                if (nav.className === "navbar-content" && logo.className === "header-logo") {
                    nav.className += " responsive";
                    logo.className += " responsive";
                } else {
                    nav.className = "navbar-content";
                    logo.className = "header-logo";
                }
            }
            
            function goToPage(pageName) {
                const href = document.location.href;
                let link = '';
                
                switch(true) {
                   case href.includes('index.html'):
                        if (pageName === 'index') {
                            link = './index.html';
                            break;
                        }
                        link = './pages/' + pageName + '.html';
                        break;
                   default:
                        if (pageName === 'index') {
                            link = '../index.html';
                            break;
                        }
                        link = './' + pageName + '.html';
                }
                
                document.location.href = link;
            }
        `

        document.body.appendChild(script);
    }
}

customElements.define('shop-header', ShopHeader);

window.addEventListener('DOMContentLoaded', () => {
    const href = document.location.href;
    let elementId = '';

    switch(true) {
        case href.includes('index.html'):
            elementId = 'aIndex';
            break;
        case href.includes('catalog.html'):
            elementId = 'aCatalog';
            break;
        case href.includes('ascii.html'):
            elementId = 'aAscii';
            break;
        case href.includes('table.html'):
            elementId = 'aTable';
            break;
    }

    const element = document.getElementById(elementId);

    element.style.color = "black";
    element.style.textDecoration = "underline dotted";

    const shopHeader = $('shop-header');

    $(window).scroll((e) => {
        if(shopHeader.offset().top !== 0) {
            if(!shopHeader.hasClass('shadow')) {
                shopHeader.addClass('shadow');
            }
        } else {
            shopHeader.removeClass('shadow');
        }
    });
})