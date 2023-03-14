const contentHeight = () => {
    const wrappers = document.querySelectorAll(".carousel-item-wrapper");
    const content = document.querySelectorAll(".reviews__description");
    function equalizeHeight() {
        const contentHeight = [];
        wrappers.forEach((element) => {
            element.style.display = "block";
        });
        content.forEach((element) => {
            contentHeight.push(element.offsetHeight);
        });
        wrappers.forEach((element) => {
            element.removeAttribute("style");
        });
        const contentHeightMax = Math.max.apply(null, contentHeight);
        content.forEach(
            (element) => (element.style.height = contentHeightMax + "px")
        );
    }
    equalizeHeight();
    window.addEventListener("resize", function () {
        equalizeHeight();
    });
};

export default contentHeight;
