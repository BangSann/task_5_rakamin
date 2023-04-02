import '../assets/style/manSection.css'
import RateCircle from '../assets/rate-circle.jsx'

function Mansection  (props){
    return(
        <div className='main'>
            <div className='container'>
                <div className='img-container'>
                    <img src={props.data.image} width='100px'/>
                </div>
                <div className='info-container'>
                    <div className='head'>
                        <div className='title'>{props.data.title}</div>
                        <div className='cate-rate'>
                            <div className='category'>{props.data.category}</div>
                            <div className='rating-container'>
                                <div className='rate-count'>{props.data.rating.rate}</div>
                                <RateCircle rate={props.data.rating.rate}/>
                            </div>
                        </div>
                    </div>
                    <div className='body'>
                        <div className='description'>{props.data.description}</div>
                    </div>
                    <div className='foot'>
                        <div className='cost'>${props.data.price}</div>
                        <button className='buybt'>Buy Now</button>
                        <button className='nextbt' onClick={props.enpoint}>Next Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mansection;