Input.keyMapper["80"] = "customMenu";

_alias_scene_map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    _alias_scene_map_update.call(this);
    if(Input.isTriggered("customMenu")) SceneManager.push(Scene_CustomMenu);
};

function Scene_CustomMenu() {
    this.initialize.apply(this, arguments);
}

Scene_CustomMenu.prototype = Object.create(Scene_MenuBase.prototype);
Scene_CustomMenu.prototype.constructor = Scene_CustomMenu;

Scene_CustomMenu.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};
Scene_CustomMenu.prototype.create = function(){
    Scene_MenuBase.prototype.create.call(this);
    this._customWindow = new Window_Custom(0,0,320, 240);
    this.addWindow(this._customWindow);
}

Scene_CustomMenu.prototype.update = function(){
    if(!this.drawnWindows){
        this._customWindow.drawAllItems();
        this.drawnWindows = true;
    }

    if(Input.isTriggered("cancel")) SceneManager.pop();
}


function Window_Custom(){
    this.initialize.apply(this,arguments);
}

Window_Custom.prototype = Object.create(Window_Base.prototype);
Window_Custom.prototype.constructor = Window_Custom;

Window_Custom.prototype.initialize = function( x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.drawAllItems();
}

Window_Custom.prototype.drawAllItems = function(){
    this.contents.clear();
    this.drawText ($gameVariables.value(2), 0, 0, this.width - this.padding * 2, "center");
    this.drawIcon(45, 48, 48)
    this.drawFace("Actor2", 4, 96, 96, 148, 148);
    this.drawCharacter("Actor2", 0, this.padding,this.padding + 96);
    this.drawGauge(0,0, 100, 1, "#ff0000", "#00ff00");
}