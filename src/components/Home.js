import '../styles/Home.css'
export function Home(props) {
    return (

        <div className="home">
            <h2> Home</h2>
            <div className="video">
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <div className="content">
                Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.

                Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.

                A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind.

                Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine.

                This is the perfect place for a home away from home.
</div>


            {/* <article class="card">
    <h4>About us </h4>
    <p>
    On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.


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
    

</article> */}

        </div>
    )
}
export default Home 