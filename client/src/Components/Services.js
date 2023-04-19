const Services = () => {
    return (
        <div className="container justify-center">
            <h1>Services</h1>
            <div className="row">
                <div className="column align-center">
                    <div className="photography-service">
                        <h1 className="photography-heading">Photography</h1>
                        <p>Visually stunning photography that captivate your audience</p>
                    </div>
                </div>
                <div className="column align-center">
                    <div className="videography-service">
                        <h1 className="videography-heading">Videography</h1>
                        <p>Visually stunning Videography that captivate your audience</p>
                    </div>
                </div>
                <div className="column align-center">
                    <div className="both-service">
                        <h1 className="both-heading">Photography & Videography</h1>
                        <p>Visually stunning photography and videography that captivate your audience</p>
                    </div>
                </div>
            </div>
        </div>
        )

}
export default Services;