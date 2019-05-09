var gameTitle;
var line1;
var line2;
var line3;
var line4;
var herName;
var instr;

var Poem = function(game) {};
Poem.prototype = {

    create: function() {     
        // Create Main Menu start screen
        game.stage.backgroundColor = "#ffbfd0";

        gameTitle = game.add.text(game.width/2, (game.height/2)-93, 'Sweet Dreams', {font: 'Helvetica', fontSize: '25px', fill: '#fff'});
        gameTitle.anchor.set(0.5);
        line1 = game.add.text(game.width/2, (game.height/2)-50, '"Oh childhood follies, oh reckless abandon...', {font: 'Helvetica', fontSize: '15px', fill: '#fff'});
        line1.anchor.set(0.5);
        line2 = game.add.text((game.width/2), (game.height/2)-30, 'Oh eternal slumber, an eternal dawn', {font: 'Helvetica', fontSize: '15px', fill: '#fff' });
        line2.anchor.set(0.5);
        line3= game.add.text((game.width/2), (game.height/2)-10, 'A desperate cry, submerged in a haze', {font: 'Helvetica', fontSize: '15px', fill: '#fff' });
        line3.anchor.set(0.5);
        line4= game.add.text((game.width/2), (game.height/2)+10, 'An echoing voice, lost in the glooming dusk"', {font: 'Helvetica', fontSize: '15px', fill: '#fff' });
        line4.anchor.set(0.5);
        herName= game.add.text((game.width/2), (game.height/2)+55, '~ Isabelle Rose ~', {font: 'Helvetica', fontSize: '15px', fill: '#fff' });
        herName.anchor.set(0.5);
        instr= game.add.text((game.width/2), (game.height/2)+97, 'Press SPACE to Continue', {font: 'Helvetica', fontSize: '15px', fill: '#fff' });
        instr.anchor.set(0.5);

    },

    update: function() {
        // Main menu logic
        // Press spacebar to transition to gameplay
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('Title');
        }
    }
};