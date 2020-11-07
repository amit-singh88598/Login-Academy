const { default: Footer } = require("./footer");
const { default: Header } = require("./header");

export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}