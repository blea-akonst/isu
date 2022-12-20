class ShopFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <div id="shopFooter">
            <h3>© <a href="https://t.me/a_k_o_n_s_t" >akonst</a>, 2022
        </div>
        `
    }
}

customElements.define('shop-footer', ShopFooter);

const beforeLoadTime = new Date().getTime();
window.addEventListener("DOMContentLoaded", () => {
    const result = (new Date().getTime() - beforeLoadTime) / 1000;
    const resultInfo = `<h3 style="margin-top: -20px">Page load time: ${result} sec</h3>`;

    document.getElementById("shopFooter").insertAdjacentHTML('beforeend', resultInfo);
})
