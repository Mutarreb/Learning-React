import '../styles/Home.css'
export function Home (props) {
    return (
<div className ="home"> 
<article class="card">
    <h4>About us </h4>
    <p>
        this is article describes the apartment and tell the customers about us
    </p>
</article>

<article class="card">
    <h4>Article two</h4>
    <p>
        How to get here
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
        this video shows the apartment and the local area
    </p>
    <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</article>

<article class="card">
    <h4>Article five</h4>
    <p>
        this is article five
    </p>
    

</article>

</div>
    )
}
export default Home 