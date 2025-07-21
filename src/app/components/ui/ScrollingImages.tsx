import React from 'react'
import Image from 'next/image'
import frame124 from "../../../../public/Frame-124.png"
import frame125 from "../../../../public/Frame-125.png"
import frame126 from "../../../../public/Frame126.png"

const ScrollingImages = () => {
    return (
        <div
            className="overflow-hidden w-full"
            // keep container size consistent with images width
        >
            <div className="infinite-scroll-container">
                {/* Repeat images twice for seamless loop */}
                <div className="infinite-scroll-track">
                    {[frame124, frame125, frame126].map((img, i) => (
                        <div key={`img1-${i}`} className="infinite-scroll-item">
                            <Image src={img} alt={`Carousel image ${i + 1}`} width={200} height={300} />
                        </div>
                    ))}
                    {[frame124, frame125, frame126].map((img, i) => (
                        <div key={`img2-${i}`} className="infinite-scroll-item">
                            <Image src={img} alt={`Carousel image duplicate ${i + 1}`} width={200} height={300} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScrollingImages
