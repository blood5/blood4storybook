import * as PIXI from 'pixi.js';
import {Viewport} from 'pixi-viewport';

export const canvas = document.createElement('canvas');

export const app = new PIXI.Application({
    view: canvas,
    width: 300,
    height: 150,
    antialias: true,
    autoDensity: true,
    backgroundColor: 0x131313,
    resolution: devicePixelRatio,
    forceCanvas: false
});

export const viewport = new Viewport({
    worldWidth: 1000,
    worldHeight: 1000,
    screenWidth: 300,
    screenHeight: 150,
    divWheel: app.view,
    interaction: app.renderer.plugins.interaction
})
    .drag()
    .pinch()
    .wheel()
    .decelerate()
    .clampZoom({
        minScale: 0.1,
        maxScale: 25
    });

app.stage.addChild(viewport);
app.ticker.start();

export const resize = (width: number, height: number) => {
    app.renderer.resize(width, height);
    viewport.resize(width, height);
};

window.addEventListener('resize', () => {
    resize(window.innerWidth - 32, window.innerHeight - 36);
});

export const createScene = ({width, height}: {width: number; height: number}) => {
    while (viewport.children.length > 0) {
        const child = viewport.children.shift();
        child?.destroy(true);
    }
    resize(width, height);
};

export const loadTextures = async () => {
    return new Promise<void>((resolve, reject) => {
        const loader = new PIXI.Loader();
        loader //
            .add('images/logo.svg')
            .add({
                name: 'Eurostile80',
                url: 'fonts/Eurostile80.fnt'
            })
            .load();

        loader.onComplete.add(() => {
            resolve();
        });

        loader.onError.add(() => {
            reject();
        });
    });
};
