import '../styles/Home.css'
export function Home (props) {
    return (
<div className ="home"> 
<article class="card">
    <h4>Article one </h4>
    <p>
        this is article one
    </p>
</article>

<article class="card">
    <h4>Article two</h4>
    <p>
        this is article two
    </p>
</article>

<article class="card">
    <h4>Article three</h4>
    <p>
        this is article three
    </p>
</article>

<article class="card">
    <h4>Article four</h4>
    <p>
        this is article four
    </p>
</article>

    <h2>About Us:
        Attractive photos about the apartment and the nearby places).
-	Content: will be divided into four sections two columns and two rows describe the following: about the company (including the video), testimonies; Pet Friendly policies; Getting there.
</h2>

<iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




</div>
    )
}
export default Home 