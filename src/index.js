/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "animate.css";

/*
 * Internal dependencies
 */
import "./styles/style.scss";
import form from "./components/form";
import burger from "./components/burger";
import contentHeight from "./components/contentHeight";
import trampolineAnim from "./components/trampolineAnim";
import cardSwitch from "./components/cardSwitch";

document.addEventListener("DOMContentLoaded", () => {
    form();
    burger();
    cardSwitch();
});

window.addEventListener("load", () => {
    contentHeight();
    trampolineAnim();
});
