import '../assets/style/un.css'

function UN  (props){
    return(
        <div className='main-un'>
            <div className='container'>
                <div className='contentUn'>                
                    <div className='message'>This Product Is Unavailable To Show</div>
                    <button className='btUn' onClick={props.enpoint}>Next Product</button>
                </div>
            </div>
        </div>
        
    )
}
export default UN;
