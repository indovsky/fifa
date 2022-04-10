import ListItem from './ListItem';

function TeamsList(props) {

    const getTeams = () => {
        return props.teams.map((team, i) => <ListItem key={i} index={i} name={team} onListItemRemove={props.onListItemRemove} /> );
    }

    const teamsCount = () => {
        return props.teams.length > 0 && <strong className="mb-2 mt-4 d-block">Drużyny ({props.teams.length})</strong>;
    }

    return (
        <>
        { teamsCount() }
        <ul className="my-4">
            { getTeams() }
        </ul>
        </>
    );
}

export default TeamsList;