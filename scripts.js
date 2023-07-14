



window.addEventListener('load', () => {
    const takeOffButton = document.querySelector('#takeoff');
    const flightStatus = document.querySelector('#flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
    let shuttleHeight = Number(spaceShuttleHeight.innerText);
    const rocket = document.querySelector('#rocket');
    const leftButton = document.querySelector('#left');
    const rightButton = document.querySelector('#right');
    let left = 0;
    let right = 0;

    takeOffButton.addEventListener('click', () => {
        const confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmation) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight += 10;
            spaceShuttleHeight.textContent = (shuttleHeight * 1000);
            rocket.style.bottom = `${shuttleHeight}px`;
        }
    })

    const landButton = document.querySelector('#landing');
    landing.addEventListener('click', () => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight = 0;
        spaceShuttleHeight.textContent = shuttleHeight;
        rocket.style.bottom = `${shuttleHeight}px`;
    })

    const abortButton = document.querySelector('#missionAbort');
    abortButton.addEventListener('click', () => {
        const abortFlight = window.confirm('Confirm that you want to abort the mission.') 
        if (abortFlight) {
            flightStatus.textContent = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight = 0;
            spaceShuttleHeight.textContent = shuttleHeight;
        }
    })

    leftButton.addEventListener('click', () =>{
        left += 10;
        right -= 10;
        rocket.style.left = `${left}px`;
    })



    // rocket.style.bottom += 
})