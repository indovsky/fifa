import ListItem from './ListItem';

function PlayersList(props) {

    const getPlayers = () => {
        return props.players.map((player, i) => <ListItem key={i} index={i} name={player} onListItemRemove={props.onListItemRemove} /> );
    }

    const playersCount = () => {
        return props.players.length > 0 && <strong className="mb-2 mt-4 d-block">Gracze ({props.players.length})</strong>;
    }

    return (
       <>
       { playersCount() }
        <ul className="my-2" name="players">
            { getPlayers() }
        </ul>
       </>
    );
}

export default PlayersList;