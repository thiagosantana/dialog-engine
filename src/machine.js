const ENGINESTATES = {
    STOPED: 0,
    PAUSED: 1
}

let currentState = ENGINESTATES.STOPED;
let activitiesArray = undefined;

exports.setActivities = activities => {
    this.activitiesArray = activities;
}

exports.run = () => {
    return {
        commands: [
            'console.log("oi")'
        ]
    }
}