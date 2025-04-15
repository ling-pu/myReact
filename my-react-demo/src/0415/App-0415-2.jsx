import { useState } from 'react'
import p1 from './img1.jpg'
import p2 from './img2.jpg'



function App() {
    // 建立圖片陣列
    const arrImgs = [p1, p2];
    // 目前圖片的state(索引值)，預設為第一張圖(0)
    const [currentImg, setCurrentImg] = useState();

    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {/* <img src={p1} alt="" width={100} onClick={() => setBigImg(p1)} />
                    <img src={p2} alt="" width={100} onClick={() => setBigImg(p2)} /> */}

                    {
                        arrImgs.map((img, index) => {
                            return (
                                <img key={index} src={img} alt="" width={100}
                                    // 當滑鼠碰到時，取得圖片的索引編號，透過setCurrentImg方法更改
                                    onMouseOver={e => setCurrentImg(index)}
                                    // 變更滑鼠形狀為手型icon
                                    style={{ cursor: "pointer" }} />
                            )
                        })
                    }


                </div>
                {/* 放大區 */}
                <div>
                    {/* {bigImg && <img src={bigImg} alt="" width={800} />} */}

                    {/* 根據目前選到的索引值，動態顯示對應圖片 */}
                    <img src={arrImgs[currentImg]} alt="" width={800} />
                </div>
            </div>
        </>
    )
}
export default App