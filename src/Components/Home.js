import Logo from "../assets/image.png";
const Home = () => {
  return (
    <div
      className="home"
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "10vh",
        maxHeight: "89vh",
        minWidth: "100%",
        backgroundImage: `url(${"https://as2.ftcdn.net/v2/jpg/05/08/91/25/1000_F_508912517_gTEwVdlpsHLOd4Me2EiQnnQUSL0t7wtS.jpg"})`,
      }}
    >
      <div
        className="headerContainer"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
          }}
        >
          <img
            src={Logo}
            style={{
              borderRadius: "50%",
              minHeight: "30vh",
              margin: "50px",
            }}
            alt=""
            srcset=""
          />
        </div>
        <div
          style={{
            maxWidth: "25vw",
          }}
        >
          <p
            style={{
              fontSize: "60px",
              fontFamily: "serif",
              fontWeight: "bolder",
              lineHeight: "10vh",
            }}
          >
            "A recipe has no soul. You, as the cook, must bring soul to the
            RECIPE."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
