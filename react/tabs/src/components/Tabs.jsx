import react, {useState} from'react';


const Tabs = (props) => {
    const [tab, setTab] = useState(0)

    const clickHandler = (e, value) => {
        setTab(value)
        props.currentTab(value)
    }


    return(
        <div>
            <button onClick={ e => clickHandler(e, 0)} >Tab1</button>
            <button onClick={e => clickHandler(e, 1)} >Tab2</button>
            <button onClick={e => clickHandler(e, 2)} >Tab3</button>
        </div>
    )

}

export default Tabs;