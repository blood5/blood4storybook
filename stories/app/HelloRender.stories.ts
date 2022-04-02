import {app, canvas, viewport} from '../Scene';
import {parseColor} from '../../src/utils/ColorUtils';
import {Sprite, Texture} from 'pixi.js';

export default {
    title: 'App/Application',
    argTypes: {
        color: {control: 'color'},
        spriteColor: { control: 'color'}
    }
};

export const HelloRender = ({color, spriteColor}: {color: string; spriteColor: string}) => {
    app.renderer.backgroundColor = parseColor(color);
    const logo = Sprite.from('images/logo.svg');
    logo.anchor.set(0.5, 0.5);
    logo.x = viewport.screenWidth / 2;
    logo.y = viewport.screenHeight / 2;
    viewport.addChild(logo);

    // add a red box
    const sprite = viewport.addChild(new Sprite(Texture.WHITE));
    sprite.tint = parseColor(spriteColor);
    sprite.width = sprite.height = 100;
    sprite.position.set(100, 100);

    return canvas;
};

HelloRender.args = {
    color: '#131313',
    spriteColor: '#ff0000'
};
