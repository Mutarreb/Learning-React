import '../styles/Home.css'
export function Home(props) {
    return (

        <div className="Home">

            <div className="video">
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>

            <div className="grid">
                <div className="homeSection1">

                    <h2>General Info</h2>

                    <ul>Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more.
                It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</ul>

                    <ul>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.</ul>
                    <ul>
                        A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind  </ul>
                    <ul>Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine.</ul>
                    <ul>This is the perfect place for a home away from home.</ul>
                    <br></br><br></br>



                </div>

                <div className="homeSection2">
                    <h2>Testimonials</h2>




                    <ul>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"</ul>

                    <ul>"This apartment is close to everything. We didn't need the car as the walks were amazing"</ul>
                    <ul>
                        Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!"</ul>
                    <ul>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</ul>
                    <ul>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</ul>

                    <ul>"A few minutes’ walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!"</ul>

                    <ul>Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</ul>

                </div>


            </div>




        </div>
    )
}
export default Home 