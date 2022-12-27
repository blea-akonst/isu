class ShopHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="header-content">
                <div class="header-logo" id="logo">
                    <h1>Bezhanoff Shop</h1>
                </div>
                <div class="navbar-content" id="headerNavContent">
                    <a href="#" id="aIndex" onclick="goToPage('index');">Главная</a>
                    <a href="#" id="aCatalog" onclick="goToPage('catalog');">ЛР 1</a>
                    <a href="#" id="aAscii" onclick="goToPage('ascii');">ASCII</a>
                    <a href="#" id="aTable" onclick="goToPage('table');">Таблица</a>
                    <a href="#" id="aForm" onclick="goToPage('form');">ЛР 5</a>
                    <a href="#" id="icon" onclick="hamburgerHandler();">&#9776;</a>
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
                
                $(window).resize(function() {
                    let height = $('shop-header').height();
                    $('.content').css({
                        'margin-top': height
                    });
                }).trigger('resize');
            }
            
            function goToPage(pageName) {
                const pathName = window.location.pathname;
                let link = '';
                
                switch(true) {
                   case (pathName.includes('index.html') || pathName.charAt(pathName.length - 1) === '/'):
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
    const pathName = window.location.pathname;
    let elementId = '';

    switch(true) {
        case (pathName.includes('index.html') || pathName.charAt(pathName.length - 1) === '/'):
            elementId = 'aIndex';
            break;
        case pathName.includes('catalog.html'):
            elementId = 'aCatalog';
            break;
        case pathName.includes('ascii.html'):
            elementId = 'aAscii';
            break;
        case pathName.includes('table.html'):
            elementId = 'aTable';
            break;
        case pathName.includes('form.html'):
            elementId = 'aForm';
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

    $(window).resize(function() {
        console.log('window resize jquery func');
        let height = $('shop-header').height();
        $('.content').css({
            'margin-top': height
        });
    }).trigger('resize');
})
