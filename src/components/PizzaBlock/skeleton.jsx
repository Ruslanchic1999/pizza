import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizza-block'
        className='pizza-block-wrapper'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="24" />
        <rect x="0" y="319" rx="10" ry="10" width="280" height="85" />
        <rect x="0" y="420" rx="8" ry="8" width="95" height="34" />
        <rect x="125" y="417" rx="15" ry="15" width="152" height="55" />
    </ContentLoader>
)

export default Skeleton