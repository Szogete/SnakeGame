
var playState = {

	create: function() {

		this.player = game.add.sprite(200, 200, 'asset');
				
		this.cursors = game.input.keyboard.createCursorKeys();
	},

	update: function() {

		if (this.cursors.left.isDown) {
			this.player.x -= 1;
		}
		else if (this.cursors.right.isDown) {
			this.player.x += 1;
		} 
		else if (this.cursors.down.isDown) { 
			this.player.y += 1;
		}
		else if (this.cursors.up.isDown){
			this.player.y -= 1;
		}	  
		

		// if(this.player.x > 300){
	 //    	game.state.start('win'); 
	 //    } 
	}

};