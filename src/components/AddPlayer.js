
function AddPlayer(props) {

    const handleSubmit = e => {
        e.preventDefault();
        let playerName = e.target.player.value;
        
        if(!playerName.trim().length) return;

        props.onPlayerAdd(playerName.charAt(0).toUpperCase() + playerName.slice(1));
        e.target.player.value = ''; // Clear input value
    }

    return ( 
        <>
            <span className="badge bg-secondary mb-2">
                Krok 1
            </span>
            <p className="text-muted">Dodaj minimum dwóch graczy, aby przejść dalej</p>

            <div className="my-2">
                <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                        <label htmlFor="player" className="form-label fw-bold col-12">Dodaj gracza</label>
                        <div className="col-12 col-sm-auto">
                            <input type="text" className="form-control w-100" id="player" name="player" required />
                        </div>
                        <div className="col-12 col-sm-auto">
                            <button type="submit" className="btn btn-primary w-100" autoComplete="off">
                                Dodaj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddPlayer;