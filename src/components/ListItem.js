function ListItem(props) {

    return (
        <li>{props.name} <button type="button" className="btn-close" aria-label="Close" onClick={() => props.onListItemRemove(props.index)}></button></li>
    );
}

export default ListItem;