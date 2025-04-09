import img1 from './assets/imgs/dog1.jpg'

function App() {
    const data = {
        product1: {
            imgUrl: img1,
            title: "Card title",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k",
            btnName: 'View image source'
        },
        product2: {
            imgUrl: img1,
            title: "Card title",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k",
            btnName: 'View image source'
        },
        product3: {
            imgUrl: img1,
            title: "Card title",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k",
            btnName: 'View image source'
        },
    }

    return (
        <>
            <div style={{
                display: 'flex',
                margin: '20px',
            }}>
                <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
                    <img src={data.product1.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.product1.title}</h5>
                        <p className="card-text">{data.product1.desc}</p>
                        <a href={data.product1.link} className="btn btn-primary">{data.product1.btnName}</a>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem', marginRight: '10px'}}>
                    <img src={data.product2.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.product2.title}</h5>
                        <p className="card-text">{data.product2.desc}</p>
                        <a href={data.product2.link} className="btn btn-primary">{data.product2.btnName}</a>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={data.product3.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.product3.title}</h5>
                        <p className="card-text">{data.product3.desc}</p>
                        <a href={data.product3.link} className="btn btn-primary">{data.product3.btnName}</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default App