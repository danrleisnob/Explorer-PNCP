const toggletheme = document.getElementById("toggletheme");

const rootHtml = document.documentElement

function changetheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    toggletheme.classList.toggle("bi-sun")
    toggletheme.classList.toggle("bi-moon-stars")

}

toggletheme.addEventListener("click", changetheme)

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(intem => {
    intem.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        intem.classList.add("active");
    })
})