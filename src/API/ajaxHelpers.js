export async function fetchAllPlayers( setPlayers) {
    try {
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/players"
        );
        const result = await response.json();
        setPlayers(result.data.players);
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

export async function fetchPlayer ( id, {setPlayer} ) {
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/players/${id}`
        )
        const result = await response.json();
        setPlayer(result.data.player)
        console.log("result: ", result)
    } catch(error) {
        console.error(error);
    }
}

export async function handleSubmit(event, submittedName, submittedBreed, submittedStatus, submittedImageUrl) {
    event.preventDefault();
    try {
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/players",
             {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${submittedName}`, 
                    breed: `${submittedBreed}`,         
                })   
            });
        const result = await response.json();
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}

export async function handleDelete(id, {setIsDeleted}) {
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/players', {
    method: 'DELETE',
  });
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/players/${id}`, {
                method: 'DELETE',
            }
        )
        const result = await response.json();
        setIsDeleted(true)
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}