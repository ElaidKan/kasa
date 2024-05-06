import './banner.scss'

function banner() {
    return (
        <div className='banner'>
            <img src = './public/banner.png' className="imgBanner" alt="banner" />
            <div className='textBanner'>Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default banner