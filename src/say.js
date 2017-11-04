class Say {
    constructor() {
        this.utt = 'Cleveland Cavaliers';
        this.sleep = 1000;
        this.nextActivity = '';
        this.type = 'SAY';
        this.name = 'SAY_34343434'
    }
}

exports.newSay = () => {
    return new Say();
}