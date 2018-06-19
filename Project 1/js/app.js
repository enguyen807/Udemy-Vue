new Vue({
  el: '#app',
  data:{
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function(){
      this.playerAttack();

      this.monsterAttack();
    },
    spcAtk: function(){
      var playerAtkDamage = this.calcDamage(10,20);
      this.monsterHealth -= playerAtkDamage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for '+ playerAtkDamage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function(){
      if (this.playerHealth <= 90) {
          this.playerHealth += 10;
      }else {
          this.playerHealth = 100;
      };
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster heals for 10'
      });
      this.monsterAttack();
    },
    runAway: function(){
      this.gameIsRunning = false;
    },
    playerAttack: function () {
      var playerAtkDamage = this.calcDamage(3, 10);
      this.monsterHealth -= playerAtkDamage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for '+ playerAtkDamage
      });
      if (this.checkWin()) {
        return;
      }
    },
    monsterAttack: function() {
      var monAtkDamage = this.calcDamage(5, 12);
      this.playerHealth -= monAtkDamage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for '+ monAtkDamage
      });
      this.checkWin();
    },
    calcDamage: function(min, max) {
      return Math.max(Math.floor(Math.random()*max + 1), min)
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  }
})
