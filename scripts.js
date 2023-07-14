let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (target) => {
    clickHandler(target.target.id);
}))

function clickHandler (clickedButton) {
    console.log(clickedButton);
    const flightStatus = document.querySelector('#flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
    let shuttleHeight = Number(spaceShuttleHeight.innerText);

    if (clickedButton == "takeoff") {
        const confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmation) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight += 10;
            spaceShuttleHeight.textContent = (shuttleHeight * 1000);
            rocket.style.bottom = `${shuttleHeight}px`;
        }
    }
    if (clickedButton == "landing") {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight = 0;
        spaceShuttleHeight.textContent = shuttleHeight;
        rocket.style.bottom = `${shuttleHeight}px`;
    }
    if (clickedButton == "missionAbort"){
        const abortFlight = window.confirm('Confirm that you want to abort the mission.') 
        if (abortFlight) {
            flightStatus.textContent = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight = 0;
            spaceShuttleHeight.textContent = shuttleHeight;}
    }
}
    


    // const leftButton = document.querySelector('#left');
    // const rightButton = document.querySelector('#right');
    // let left = 0;
    // let right = 0;


    // leftButton.addEventListener('click', () =>{
    //     left += 10;
    //     right -= 10;
    //     rocket.style.left = `${left}px`;
    // })

    // rocket.style.bottom += 
