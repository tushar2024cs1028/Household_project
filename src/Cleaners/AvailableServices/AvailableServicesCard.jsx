import "./AvailableServicesCard.css";

const AvailableServicesCard=({ imageSource, title,text})=>{
    
    return (
        <div className="Available_card ">
          <div className="Available_overflow">
            <img src={imageSource} alt="a wallpaper" className="Available_card-img-top" />
          </div>
          <div className="Available_card-body ">
            <h4 className="Available_card-title">{title}</h4>
            
            <a
              href="/"
              className="Available_btni"
              rel="noreferrer"
              title="#"
            >
              <button className="Available_btn">View Gallery</button>
            </a>
          </div>
        </div>
      );
}
export default AvailableServicesCard;