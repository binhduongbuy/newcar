﻿//UpperScene.js, contains scale Scene/ handle dragging
// import { Graphics } from 'pixi.js'


import {ScaleScene, dragScene} from './index'

export class UpperScene extends PIXI.Graphics {
    scaleScene: ScaleScene;
    dragScene() {
        var scene = this.scaleScene.scene
        var scaleScene = this.scaleScene;
        var startDrag = function (data: dragScene.Data) {
            console.log(data.data.global.x)
            // stop the default event...
            data.data.originalEvent.preventDefault();
            // store a reference to the data
            // The reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = data;
            this.dragging = true;
            dragScene.oldX = scene.position.x * scaleScene.scale.x;
            dragScene.oldY = scene.position.y * scaleScene.scale.x;
            dragScene.oldPosition = data.data.getLocalPosition(this.parent);
        };
        this.on("mousedown", startDrag);
        this.on("touchstart", startDrag);


        // set the events for when the mouse is released or a touch is released
        var stopDrag = function () {
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
            // scene.pivot.x+=scene.position.x-oldX;
            // scene.pivot.y+=scene.position.y-oldY;
        };
        this.on("mouseup", stopDrag);
        this.on("mouseupoutside", stopDrag);
        this.on("touchend", stopDrag);
        this.on("touchendoutside", stopDrag);
        // set the callbacks for when the mouse or a touch moves

        var drag = function () {
            if (this.dragging) {
                var newPosition = this.data.data.getLocalPosition(this.parent);
                scene.position.x = (newPosition.x - dragScene.oldPosition.x + dragScene.oldX) / scaleScene.scale.x
                scene.position.y = (newPosition.y - dragScene.oldPosition.y + dragScene.oldY) / scaleScene.scale.x
                //Rezo.sceneDraw.position.x = Rezo.sceneDraw.position.x -scene.position.x;
                //Rezo.sceneDraw.position.y = Rezo.sceneDraw.position.y -scene.position.y;
                //// this.hitArea.x=-this.position.x+windowW/2*this.scale.x
                // this.hitArea.y=-this.position.y+windowH/2*this.scale.y

                // this.clear();
                // updateWindowSize()
                // this.beginFill(0xFF5500, 0.2)
                // this.drawRect(-this.position.x/this.scale.x,-this.position.y/this.scale.y,windowW/this.scale.x,windowH/this.scale.x)


            }
        }
        this.on("mousemove", drag);
        this.on("touchmove", drag)
    }
}