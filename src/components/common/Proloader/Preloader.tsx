import loadAnimation from '../../../assets/img/isLoading.gif'
import {FC} from "react";

type PropsType = {

}

const Preloader: FC<PropsType> = (props) => {
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