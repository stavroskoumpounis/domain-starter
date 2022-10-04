import "../styles/popup.css"

function Popup(props) {

    return( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner cta-button connect-wallet-button2">
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";

}

export default Popup;