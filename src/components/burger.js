const burger = () => {
    const wrapper = document.querySelector(".nav__wrapper"),
        burger = wrapper.querySelector(".nav__burger"),
        links = wrapper.querySelector(".nav__links"),
        link = wrapper.querySelectorAll("a"),
        backdrop = document.querySelector(".nav__backdrop"),
        body = document.querySelector("body");

    burger.onclick = function () {
        [burger, backdrop, links, wrapper, body].forEach((item) => {
            item.classList.toggle("__opened");
        });
    };

    backdrop.onclick = closeAll;
    link.forEach((element) => {
        element.onclick = closeAll;
    });

    function closeAll() {
        [burger, backdrop, links, wrapper, body].forEach((item) => {
            item.classList.remove("__opened");
        });
    }
};

export default burger;
