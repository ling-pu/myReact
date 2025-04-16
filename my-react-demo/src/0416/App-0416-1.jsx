// *天氣資料 https://data.gov.tw/dataset/6069
// *天氣圖 https://www.cwa.gov.tw/V8/C/K/Weather_Icon.html

import { useEffect, useState } from "react";


// 抓圖檔(少量時)：
// import 晴時多雲 from'./weatherIcon/晴時多雲.svg'



function App() {
    // 1. 使用useState建立變數(空陣列)：自訂變數名稱citys，方法名稱setLocation
    // const [citys, setLocation] = useState([])
    const [citys, setLocation] = useState([]);

    // 渲染
    useEffect(() => {
        // (async)串天氣api
        (async () => {
            // 取得遠端公開資料json
            // const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            const data = await axios.get('./api/F-C0032-001.json');
            // 查看是否連上json
            // console.log(data);

            // 2. 解構：取出各縣市氣象資料
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            // 3. 將取得的天氣資料，透過外部setLocation方法，更新location變數資料
            setLocation(location);

        })();
    }, [])

    //     // (async)串天氣api
    //     (async () => {
    //         // 查看執行順序
    //         console.log(1);

    //         // 取得遠端公開資料json
    //         // const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
    //         const data = await axios.get('./api/F-C0032-001.json');
    //         // 查看是否連上json
    //         // console.log(data);

    //         // 解構：取出各縣市氣象資料(資料位置在整包裡的location)
    //         const { location } = data.data.cwaopendata.dataset;
    //         console.log(location);

    //         setLocation(location);

    //     })();
    // // (); => 立即執行


    return (
        <>

            <h2>36小時天氣預報</h2>
            {/* className串bootstrap樣式庫 */}
            {/* 一列兩欄 */}
            <div className="row row-cols-2 g-4" >
                {/* 使用迴圈，顯示所有縣市 */}
                {
                    citys.map((city) => {
                        return (
                            <>
                                {/* 每欄資訊 */}
                                <div className="col" key={city.locationName}>
                                    {/* 使用bootstap卡片樣式 */}
                                    <div className="card text-center">
                                        {/* 卡片標題 */}
                                        <div className="card-header">
                                            <div className="h4 my-0">
                                                {/* 臺北市 */}
                                                {city.locationName}
                                            </div>
                                        </div>
                                        {/* 卡片內容 */}
                                        <div className="row row-cols-3">
                                            {/* 顯示每個縣市的3個欄位位置 */}
                                            {
                                                city.weatherElement[0].time.map((item, index) => {
                                                    return (
                                                        <div className="col" key={index}>
                                                            {/* a. 日期 */}
                                                            <div className="h4 my-0">
                                                                {/* 16日 */}
                                                                {/* 使用日期時間函數toLocalString() */}
                                                                {
                                                                    new Date(item.startTime).toLocaleString(undefined, {
                                                                        day: 'numeric'
                                                                    })
                                                                }
                                                            </div>
                                                            {/* b. 時間 */}
                                                            {/* 上午6:00 */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    hour: 'numeric',
                                                                    minute: 'numeric'
                                                                })
                                                            }
                                                            <br />
                                                            ~<br />
                                                            {/* 下午6:00<br /> */}                                                            
                                                            {
                                                                new Date(item.endTime).toLocaleString(undefined, {
                                                                    hour: 'numeric',
                                                                    minute: 'numeric'
                                                                })
                                                            }
                                                            <br />
                                                            {/* c. 天氣圖 */}
                                                            {/* 使用執行路徑，所以圖檔要放在public資料夾中，才讀得到。 */}
                                                            {/* 方法1: import寫在函式外載入路徑，圖檔不限定放在哪 */}
                                                            {/* <img src={晴時多雲} alt="" /> */}
                                                            {/* 方法2(多圖推薦): 從根目錄直接讀取，圖檔放在public或第一層*/}
                                                            {/* <img src="./weatherIcon/晴時多雲.svg" alt="" /> */}
                                                            <img src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                                                            {/* d. 天氣名稱 */}
                                                            <div className="mt-2">
                                                                {/* 晴時多雲 */}
                                                                {item.parameter.parameterName}
                                                            </div>
                                                            {/* e. 降雨率 */}
                                                            <div className="mt-2">
                                                                {/* icon */}
                                                                {/* <i className="bi bi-umbrella-fill">10%</i> */}
                                                                <i className="bi bi-umbrella-fill">
                                                                    {city.weatherElement[4].time[index].parameter.parameterName}%
                                                                </i>

                                                            </div>


                                                        </div>

                                                    )
                                                })
                                            }


                                        </div>

                                    </div>
                                </div>

                            </>

                        )

                    })
                }

            </div>

        </>

    )
}
export default App
