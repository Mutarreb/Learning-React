import {useState} from 'react'
export function Button (props) {
    //store number of clicks 
    const [click, setClick] = useState(props.start)
    const update = () => {
        setClick ( click + 1 )
    }
    return (
        <button className = "button" onClick = {update}>
            { "Clicked " + click + " times" }
        </button>
    )

}
export default Button 

