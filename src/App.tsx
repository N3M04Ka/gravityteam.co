import AboutUs from "./webElements/AboutUs";
import Header from "./webElements/Header";
import Introduction from "./webElements/Introduction";
import Services from "./webElements/Services";
import Partners from "./webElements/Partners";
import Comments from "./webElements/Comments";
import JoinUs from "./webElements/JoinUs";
import ContactUs from "./webElements/ContactUs";
function App() {
    return <>
        <Header/>
        <main>
            <Introduction/>
            <AboutUs/>
            <Services/>
            <Partners/>
            <Comments/>
            <JoinUs/>
            <ContactUs/>
        </main>
    </>;
}

export default App;
