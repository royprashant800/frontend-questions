import { useState } from "react";

const Carousel = () => {
    const [currIndex, setCurrIndex] = useState(0);

    const data = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdddSCbWbm8V7veqwPZ5DUCKLPaXAmeOEtog&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbBo8pAFktLjJo8Ew4WblSZ11l7sNTmlLEQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkoj4BZmD1KH2YPBIYWDrVUvthRhW_ik8Dg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5I6_mp0AaSzZPWRevM3erF-YCTxm8naq8g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVaQLGT_yJBeNgZqPlRWhw6CLMAA5X32oqA&s"
    ]

    const handlePrev = () => {
        currIndex === 0 ? setCurrIndex(data.length - 1) : setCurrIndex(currIndex - 1);
    }
    const handleNext = () => {
        setCurrIndex((currIndex + 1) % data.length);
    }

    return <div>

        <button onClick={handlePrev}>Prev</button>
        {data.map((item, index) => (
            currIndex === index && <img src={data[currIndex]} alt="" />
        ))}
            
        <button onClick={handleNext}>Next</button>
    </div>
}

export default Carousel;