//------------------------------------------------------------------------------------------------------------
//HK_TitleScreenRemover.js
//------------------------------------------------------------------------------------------------------------
/*:
 * @plugindesc Completely removes the default title screen.
 * @author Henry King
 * @help
 * -----------------------------------------------------------------------------------------------------------
 *                                HK_TitleScreenRemover
 * -----------------------------------------------------------------------------------------------------------
 * Version: 1.0
 * Release Date: 7/25/2024
 * -----------------------------------------------------------------------------------------------------------
 * Useful Scrpts
 * THESE ARE NOT PLUGIN COMMANDS!
 * Even if this plugin is uninstalled, these scripts should still work since they are native to RPG Maker MV.  
 * 
 * Play Cursor SE
 * SoundManager.playCursor();
 * 
 * Play OK SE
 * SoundManager.playOk();
 * 
 * Play Cancel SE
 * SoundManager.playCancel();
 * 
 * Play Buzzer SE
 * SoundManager.playBuzzer();
 * 
 * Open Load Screen
 * SceneManager.push(Scene_Load);
 * 
 * Open Options Screen
 * SceneManager.push(Scene_Options);
 * 
 * Clear All Pictures
 * $gameScreen.clearPictures();
 * 
 * Clear All Switches
 * $gameSwitches.clear();
 * 
 * Clear All Variables
 * $gameVariables.clear();
 * 
 * Check if Any Save File Exists (Switch)
 * //The number represents the switch ID.
 * if (DataManager.isAnySavefileExists()) {
 *   $gameSwitches.setValue(1, true);
 * } else {
 *   $gameVariables.setValue(1, false);
 * }
 * 
 * Check if Any Save File Exists (Variable)
 * //The first number represents the variable ID, and the second number represents the value of the variable.
 * if (DataManager.isAnySavefileExists()) {
 *   $gameVariables.setValue(1, 1);
 * } else {
 *   $gameVariables.setValue(1, 0);
 * }
 * 
 * Exit Game
 * SceneManager.exit();
 * -----------------------------------------------------------------------------------------------------------
 * You can just put my name in the credits of your game if you want to credit me.
 *
 * Ex: "Special Thanks: Henry King"
 *
 * You may use this plugin however you want as long as you don't pass it off as
 * your own.
 */

(function() {
	//This skips the title screen whenever it is called.
	Scene_Title.prototype.start = function() {
			DataManager.setupNewGame();
			SceneManager.goto(Scene_Map);
	};

	//Everything after this makes sure that the title screen doesn't even show up for a split second when the title screen is called.
	
	//This prevents the background from being rendered.
    Scene_Title.prototype.createBackground = function() {
    };
	
	//This prevents the game title from being rendered.
    Scene_Title.prototype.drawGameTitle = function() {
    };

	//This prevents the main window from being rendered.
	Scene_Title.prototype.createCommandWindow = function() {
		this._commandWindow = new Window_TitleCommand();
	};
})();
