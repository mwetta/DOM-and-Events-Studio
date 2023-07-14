
let rocket = document.getElementById('rocket');
let width = rocket.parentElement.clientWidth;
let currentPosition = [0, width/2-38];
rocket.style.position = 'absolute';
setPosition(currentPosition);

function setPosition (currentCoordinates) {
    rocket.style.bottom = `${currentPosition[0]}px`;
    rocket.style.left = `${currentPosition[1]}px`;
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (target) => {
    clickHandler(target.target.id);
}))

function clickHandler (clickedButton) {
    const flightStatus = document.querySelector('#flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
    let shuttleHeight = Number(spaceShuttleHeight.innerText);

    if (clickedButton === "takeoff") {
        const confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmation) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight += 10;
            spaceShuttleHeight.textContent = (shuttleHeight * 1000);
            rocket.style.bottom = `${shuttleHeight}px`;
        }
    } else if (clickedButton === "landing") {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight = 0;
        spaceShuttleHeight.textContent = shuttleHeight;
        rocket.style.bottom = `${shuttleHeight}px`;
    } else if (clickedButton === "missionAbort"){
        const abortFlight = window.confirm('Confirm that you want to abort the mission.') 
        if (abortFlight) {
            flightStatus.textContent = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight = 0;
            spaceShuttleHeight.textContent = shuttleHeight;}
    } else {
        flightControl(clickedButton);
    }
}
    
function flightControl (direction) {
    if (direction === 'up') {
        currentPosition[0] += 10;
    } else if (direction === 'down') {
        currentPosition[0] -= 10;
    } else if (direction === 'left') {
        currentPosition[1] -= 10;
    } else if (direction === 'right') {
        currentPosition[1] += 10;
    }
    setPosition(currentPosition);
}
