var loseState = {

	create: function() {

		game.add.text(100, 100, 'You lose! Press space to restart', 
			{fill: '#fff'});

		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.spaceKey.onDown.add(this.restartGame, this);
	},

	update: function() {
	},

	restartGame: function () {
        game.state.start('menu');    
    },


};