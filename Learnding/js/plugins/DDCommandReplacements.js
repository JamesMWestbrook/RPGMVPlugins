
//=============================================================================
// DDAltMenu.js
// By DecayingDev
// 
// Version: 1
// Released under <take me daddy>//=============================================================================

/*:
	@plugindesc Making plugin commands of script commands
	@author DecayingDev


*/

(function(){
   var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        // insert additional processing details here
		 if (command === 'MyPlugin' && args[0] === 'clear') {
		 $gameMessage.add("ddd");
		 GameMessage.add("ddd");
        }


    };
})