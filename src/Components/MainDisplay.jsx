const MainDisplay = ({imgDetails}) => {
    return (
        <div>
            <h2>{imgDetails.title}</h2>
            <h2>{imgDetails.date}</h2>

            <h2>{imgDetails.copyright} </h2>
            <div className="image-container">
                <img src={imgDetails.url} alt={imgDetails.title} style={{width: "100%"}}/>
            </div>
            <p>{imgDetails.explanation}</p>
        </div>
    )
}

export default MainDisplay;