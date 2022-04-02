import {app, canvas, viewport} from '../Scene';
import {Sprite} from 'pixi.js';

export default {
    title: 'App/Application'
};

export const Hello = ({color}: {color: string}) => {
    app.renderer.backgroundColor = 0x131313;
    const logo = Sprite.from('images/logo.svg');
    logo.anchor.set(0.5, 0.5);
    logo.x = viewport.screenWidth / 2;
    logo.y = viewport.screenHeight / 2;
    viewport.addChild(logo);
    return canvas;
};
