function AddTeam(props) {

    
    const canAdd = () => {
        return props.teamsCount < props.playersCount;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let teamName = e.target.team.value;
        
        if(!teamName.trim().length || !canAdd()) return;

        props.onTeamAdd(teamName.charAt(0).toUpperCase() + teamName.slice(1));
        e.target.team.value = ''; // Clear input value
    }
    
    const submitButton = () => {
        if(canAdd()) {
            return (
                <div className="col-12 col-sm-auto">
                    <button type="submit" className="btn btn-primary w-100">
                        Dodaj
                    </button>
                </div>
            );
        }
    }

    return ( 
        <>
        <span className="badge bg-secondary mb-2">
            Krok 2
        </span>
        <p className="text-muted">Dodaj minimum dwie drużyny, aby przejść dalej</p>

        <div className="my-2">
            <form onSubmit={handleSubmit}>
                <div className="row g-2">
                    <label htmlFor="team" className="form-label fw-bold col-12">Dodaj drużynę</label>
                    <div className="col-12 col-sm-auto">
                        <input type="text" className="form-control w-100" id="team" name="team" required />
                    </div>
                    { submitButton() }
                </div>
            </form>
        </div>
        </>
    );
}

export default AddTeam;