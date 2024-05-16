import './banner.scss'

function banner({image, text}) {
    return (
        <div className='banner'>
            <img src = {image} className="imgBanner" alt="banner" />
            <div className='textBanner'>{text}</div>
        </div>
    )
}

export default banner