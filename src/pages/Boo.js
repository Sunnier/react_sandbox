import {createElement as $} from "react";

const Boo = () => $("h1", {className: "boo-boo"}, ["Boo! 🙈", $("i", {}, "poo")]);

// const Boo = () => (
//     <h1>Boo!</h1>
// )

export default Boo;
