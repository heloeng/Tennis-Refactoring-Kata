

class TennisGame {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
    }

    getScore() {
        if (this.playersHaveSameScore() && this.player1.points < 4) {
            return this.scoreNames(this.player1.points) + "-All";
        } else if (this.playersHaveSameScore()) {
            return "Deuce";
        } else if (this.isAnyPlayerAdvOrWin()) {
            return this.advantageOrWin();
        } else {
            return this.scoreNames(this.player1.points) + "-" + this.scoreNames(this.player2.points);
        }
    }

    playersHaveSameScore() {
        return this.player1.points === this.player2.points;
    }

    isAnyPlayerAdvOrWin() {
        return Math.abs(this.player1.points - this.player2.points) > 1 && (this.player1.points >= 4 || this.player2.points >= 4);
    }

    advantageOrWin() {
        if (this.player1.points > this.player2.points) {
            return "Advantage " + this.player1.name;
        } else {
            return "Advantage " + this.player2.name;
        }
    }

    scoreNames(points) {
        const pointNames = ["Love", "Fifteen", "Thirty", "Forty"];
        return pointNames[points];
    }

    playerWonPoint(playerName) {
        if (playerName === this.player1.name) {
            this.player1.addPoint();
        } else {
            this.player2.addPoint();
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoint() {
        this.points++;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame;
}


const game = new TennisGame('Player 1', 'Player 2');
console.log(game.getScore());
