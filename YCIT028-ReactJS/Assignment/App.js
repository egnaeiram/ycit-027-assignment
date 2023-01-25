// For your assignment, you must take the following array of objects and
// pass props down to the sidebar component to render the links.

// If you did it correctly, you should see the following links in your sidebar:
// <li><a href="https://www.google.com" target="_blank">Google</a></li>
// <li><a href="https://www.bing.com" target="_blank">Bing</a></li>
// <li><a href="https://www.baidu.com" target="_blank">baidu</a></li>

const initialLinks = [
    {
        id: 1,
        text: "Google",
        url: "https://www.google.com",
    },
    {
        id: 2,
        text: "Bing",
        url: "https://www.bing.com/",
    },    {
        id: 3,
        text: "Baidu",
        url: "https://www.baidu.com/",
    },
];


function App() {
    const [links, setLinks] = useState(initialLinks); // pass links down to sidebar via props (note: we won't be needing setLinks, but I included it for completeness)

    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <Sidebar />
                <RecommendedVideos />
            </main>
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1>My Header</h1>
        </header>
    );
}

export default function Sidebar() {
    // get the props passed down from App and render the links using the map method
    // be sure to keep the <li> tags and put the <a> tags inside of them (see comments at the beginning of the file)

    return (
        <aside>
            <h2>My Sidebar</h2>
            <ul>
                <li><a href="https://www.google.com" target="_blank">Google</a></li>
                <li><a href="https://www.bing.com" target="_blank">Bing</a></li>
                <li><a href="https://www.baidu.com" target="_blank">baidu</a></li>
            </ul>
        </aside>
    );
}

function RecommendedVideos() {
    return (
        <section>
            <h2>Recommended Videos</h2>
            <ul>
                <li>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/WXuK6gekU1Y"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </li>
                <li>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/aircAruvnKk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </li>
                <li>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/d6c6uIyieoo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </li>
            </ul>
        </section>
    );
}
