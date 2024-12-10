import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <marquee behavior="alternate" direction="left">
        <h1>!...Feel Like Free...!</h1>
      </marquee>
      <div className="imageDiv">
        <img
          src="https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHOFhjxc_9zYdrOTr2xy_P90VBDiF60X_YI1CdLxdGs="
          alt="img"
        />
        <img
          src="https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=i9KGcEkXnyJbWOHE6o0sHok_lNbpb9UMfb7uX2P9NDw="
          alt="img"
        />
      </div>
    </div>
  );
}

export default Home;
