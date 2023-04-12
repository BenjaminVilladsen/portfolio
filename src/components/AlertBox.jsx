const AlertBox = ({onTap}) => {
    return ( <div>
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-primary w-11/12 md:w-1/2 h-1/2 md:h-1/3 flex flex-col justify-center items-center rounded-lg bg-bgLight">
                <h1 className="text-2xl font-bold text-accent">Thank you</h1>
                <p className="text-xl font-semibold text-accent pb-4">I've received your message</p>
                {/* close */}
                <button onClick={onTap}
                className="w-1/2  py-2 border-2 border-bgGray  bg-transparent text-bg-bgGray rounded-lg text-lg font-semibold">
                    Close
                </button>
            </div>
        </div>
    </div> );
}
 
export default AlertBox;