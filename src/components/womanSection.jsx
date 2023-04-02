import '../assets/style/womanSection.css'
import RateCircle from '../assets/rate-circle-wm.jsx'

function Womansection  (props){
    return(
        <div className='main-wm'>
            <div className='container-wm'>
                <div className='img-container-wm'>
                    <img src={props.data.image} width='100px'/>
                </div>
                <div className='info-container-wm'>
                    <div className='head-wm'>
                        <div className='title-wm'>{props.data.title}</div>
                        <div className='cate-rate-wm'>
                            <div className='category-wm'>{props.data.category}</div>
                            <div className='rating-container-wm'>
                                <div className='rate-count-wm'>{props.data.rating.rate}</div>
                                <RateCircle rate={props.data.rating.rate}/>
                            </div>
                        </div>
                    </div>
                    <div className='body-wm'>
                        <div className='description-wm'>{props.data.description}</div>
                    </div>
                    <div className='foot-wm'>
                        <div className='cost-wm'>${props.data.price}</div>
                        <button className='buybt-wm'>Buy Now</button>
                        <button className='nextbt-wm' onClick={props.enpoint}>Next Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Womansection;