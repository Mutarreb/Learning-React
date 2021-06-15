import {Text} from './Text' 
export function List (props) {
    const listItems = props.items_list.map((thing) => {
        return( 
        <Text name ={thing.name} color ={thing.colour} />
        )
    })
    return(
        <div className ="list">
            <ul>
                {listItems}

            </ul>
           
        </div>
    )
}

export default List