import loadAnimation from '../../../assets/img/isLoading.gif'

const Preloader = (props) => {
    return (
        <div>
            <img src={loadAnimation} alt='loading...' style={{
                filter: 'hue-rotate(260deg)',
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                clipPath: 'circle(29% at 50% 50%)'
            }} />
        </div>
    )
}

export default Preloader