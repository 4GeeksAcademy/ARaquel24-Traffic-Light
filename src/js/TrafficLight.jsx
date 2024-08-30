import React, {useState} from "react";

const TrafficLight =() =>{
    const [colorRed, setColorRed] = useState('grey')
    const [colorYellow, setColoryellow] = useState('grey')
    const [colorGreen, setColorGreen] = useState('grey')
    
    function redLight() {
        if (colorRed == 'red') {
            setColorRed('grey')
        }else{
            setColorRed('red')
            setColoryellow('grey')
            setColorGreen('grey')
        }
    }
    function yellowLight() {
        if (colorYellow == 'yellow') {
            setColoryellow('grey')
        }else{
            setColorRed('grey')
            setColoryellow('yellow')
            setColorGreen('grey')
        }
    }
    function greenLight() {
        if (colorGreen == 'green') {
            setColorGreen('grey')
        }else{
            setColorRed('grey')
            setColoryellow('grey')
            setColorGreen('green')
        }
    }

    return (
        <>

            <div className="d-flex flex-column mb-3 m-5 align-items-center rounded-pill " style={{backgroundColor: 'black',  width: 100}}>
                <div className="p-2 m-2 rounded-circle" style={{backgroundColor: colorRed, width: 70, height: 70,}} onClick={redLight}></div>
                <div className="p-2 m-2 rounded-circle" style={{backgroundColor: colorYellow, width: 70, height: 70,}} onClick={yellowLight}></div>
                <div className="p-2 m-2 rounded-circle" style={{backgroundColor: colorGreen, width: 70, height: 70,}} onClick={greenLight}></div>
                
            </div>
                            
        </>
    )
        

}
export default TrafficLight