import './style/circle.css'

function RateCircle (props){
    const rate = props.rate ;

    const empty = ["","","","",""]
    function rateArea(){
        if(rate<=1){
            return  1; 
        }if(rate<=2){
            return  2; 
        }if(rate<=3){
            return  3; 
        }if(rate<=4){
            return  4; 
        }if(rate<=5){
            return  5; 
        }   
    }

    function ReverseCircle(){
        return empty.map((a,i)=>{
            if(i+1<=rateArea()){
                return (
                    <div className='circle-fill wm-fill'>{a}</div>
                )
            }else{
                return (
                    <div className='circle wm-circle'>{a}</div>
                )
            }
        })
    }
    return(
        <div className='circle-con'>
            <ReverseCircle/>
        </div>
    )
}

export default RateCircle ;