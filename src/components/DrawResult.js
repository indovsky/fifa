function DrawnResult(props) {
    return (
        <>
        <span className="badge bg-success mb-2">
            Wynik
        </span>
        <div className="result my-2">
            { props.result.map(player => {
                return (
                    <div key={player.team} className="border-bottom py-3">
                        <h5 className="m-0">{player.name} <span className="badge bg-secondary">{player.team}</span></h5>
                    </div>
                )
            }) }
        </div>
        </>
    );
}

export default DrawnResult;