document.addEventListener("DOMContentLoaded", function(event) {
    if(!window.grObserver) {
        window.grObserver = new MutationObserver((mutationList, observer) => {
            for (const mutation of mutationList) {
                if(mutation.type === "childList" && mutation.addedNodes && [...mutation.addedNodes].find(node=>node.className==="gumroad")) { 
                  console.log('Gattexxxm', mutation);
                    const grNode = [...mutation.addedNodes].find(node=>node.className==="gumroad")
                    const cartbtn = grNode.getElementsByClassName('cart-button')[0]
                    grNode.style.position = cartbtn.style.position = ''
                    grNode.style.padding = '4px'
                    const isMobile = !!document.getElementsByClassName('menu__list').length
                    const addTo = document.getElementsByClassName('menu__list')[0] || document.getElementsByClassName("navbar__items navbar__items--right")[0]
                    window.grObserver.disconnect();
                    // if(isMobile) {
                    //     addTo.appendChild(grNode);
                    //     grNode.style.padding = '16px'
                    //     grNode.style.width = cartbtn.style.width = '-webkit-fill-available'
                    // }
                    // else addTo.insertBefore(grNode,document.getElementsByClassName('DocSearch DocSearch-Button')[0].parentElement)
                }
            }
        })
        window.grObserver.observe(document.body, {childList: true });
    }
 });


