import img1 from './assets/imgs/dog1.jpg'
function App() {
    const data = {
        imgUrl: img1,
        title: "Card title",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k",
        btnName: 'View image source'
    }

    return (
        <>
            <div className="card" style={{width:'18rem'}}>
                <img src={data.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.desc}</p>
                    <a href={data.link} className="btn btn-primary">{data.btnName}</a>
                </div>
            </div>
        </>
    )
}
export default App