import { useState } from 'react'
import p1 from './img1.jpg'
import p2 from './img2.jpg'



function App() {
    // 建立圖片陣列
    const arrImgs = [p1, p2];
    // 目前圖片的state(索引值)，預設為第一張圖(0)
    const [currentImg, setCurrentImg] = useState();

    // 文字陣列
    const arrString = ["Apple", "Banana", "Orange"];
    const [activeIndex, setActiveIndex] = useState(0);

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
                                    onMouseOver={() => setCurrentImg(index)}
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
                <hr />

                <ul>
                    {arrString.map((text, i) => {
                        return (
                            <li
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                style={{color:i===activeIndex?'red':'black'}}
                            >
                                {text}
                            </li>
                        );
                    })}
                </ul>
            </div >
        </>
    )
}
export default App