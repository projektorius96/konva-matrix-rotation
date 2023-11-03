import { Stage, Layer, Node, Shape } from './konva-components/index.js';
import { DegToRad } from './utils/constants.js';
import { matrixRotate } from './callbacks/rotate.js';
import { HUD, Input } from '@declarative-hud/index.js'
export default void function(){

    const rangeParams = {
        min: 1,
        max:  360,
        step: 1,
        value: 1,
    }
    const GUI = new HUD({container: document.body, relativeWidth: 30, position: 'right'})
    const slider = GUI.addSection('slider'/*, false@default */);
    /* === slider */
    const rangeController = GUI.addController(
        {
            label: '0to360', 
            view: new Input(
                {
                    type: 'range', 
                    attrs: {...rangeParams}
                }
            ), 
            section: slider.getRef
        }
    );

    const 
        Konva〵Node〵Defaults = new Node({
            container: document.getElementById('app'),
            width: window.innerWidth * 0.98,
            height: window.innerHeight * 0.97,
                x: innerWidth / 2,
                y: innerHeight / 2,
        })

        new Stage({
        ...Konva〵Node〵Defaults,
    })
    .add( 
        new Layer({draggable: true})
            .add(
                new Shape({sceneFunc: function(ctx, shape){

                    shape.setAttrs({
                        x: 0,
                        y: 0,
                        width: 200,
                        height: 200,
                        stroke: 'black',
                        strokeWidth: 2,
                    })

                    GUI.find(rangeController.getRef).on('input', function(){

                        ctx.clear()
                        ctx.setTransform(...matrixRotate( DegToRad( parseInt( this.value ) ) ), Konva〵Node〵Defaults.x(),  Konva〵Node〵Defaults.y())
                        ctx.rect(shape.x(), shape.y(), shape.width(), shape.height())
                        ctx.fillStrokeShape(shape)

                    });
                }})
                )
        )
        
}()