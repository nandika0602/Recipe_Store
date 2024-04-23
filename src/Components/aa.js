import img from "../assets/RecipeImage.png";
import img2 from "../assets/image.png";
import img3 from "../assets/image2.png";
import img4 from "../assets/image3.png";
const aa = () => {
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
        // https://as2.ftcdn.net/v2/jpg/05/08/91/25/1000_F_508912517_gTEwVdlpsHLOd4Me2EiQnnQUSL0t7wtS.jpg
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
            src={img2}
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
    // <div
    //   style={{
    //     minHeight: "100vh",
    //     display: "flex",
    //   }}
    // >
    //   <img
    // src={img4}

    // good
    // src={
    //   "https://e0.pxfuel.com/wallpapers/461/160/desktop-wallpaper-recipe-book-recipe-book-stock.jpg"
    // }
    //ok
    //     src={
    //       "https://media.istockphoto.com/id/1313187927/vector/cooking-food-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=qC9BPv5TLtYEh-_myYacOZSugAEUx4S_uq5s6H33-ss="
    //     }
    // src={
    //   "https://img.freepik.com/free-photo/ingredients-sweet-apple-pie-stone-light-background_127032-3501.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713830400&semt=ais"
    // }
    //not bad
    //     src={
    //       "https://img.freepik.com/free-photo/top-close-up-view-spices-spices-bottle-oil-tomatoes-lemon-sauce-cream-notebook_140725-71779.jpg"
    //     }
    //ok
    //     src={
    //       "https://t3.ftcdn.net/jpg/06/72/45/24/360_F_672452471_4kHMWT93ipMIvpg862kRS3FlwvMKg8nS.jpg"
    //     }
    //ok
    // src={
    //   "https://img.freepik.com/premium-photo/book-recipes-fresh-spices-herbs-stone-background_220925-13074.jpg"
    // }
    //not bad
    // src={
    //   "https://img.freepik.com/free-photo/top-close-up-view-spices-colorful-spices-onions-garlic-bottle-oil-tomatoes-lemon-sauce_140725-71683.jpg"
    // }
    //good
    // src={
    //   "https://as2.ftcdn.net/v2/jpg/05/08/91/25/1000_F_508912517_gTEwVdlpsHLOd4Me2EiQnnQUSL0t7wtS.jpg"
    // }
    //good
    //     src={
    //       "https://t3.ftcdn.net/jpg/06/72/45/22/360_F_672452282_37w8WlNXxxgY0hxCNKEMTTj03IQE5ong.jpg"
    //     }
    //     style={{
    //       marginTop: "10vh",
    //       maxHeight: "89vh",
    //       minWidth: "100%",
    //     }}
    //   />
    // </div>
  );
};

export default aa;
