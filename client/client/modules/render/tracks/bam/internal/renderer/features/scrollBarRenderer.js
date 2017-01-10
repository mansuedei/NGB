import {drawingConfiguration} from '../../../../../core';

export function renderScrollBar(canvasSize, positionInfo, drawingConfig) {
    const {end, start, total} = positionInfo;
    const {height, width} = canvasSize;
    const {config, graphics, isHovered, topMargin} = drawingConfig;
    const containerHeight = height / drawingConfiguration.scale - topMargin;
    const x = width / drawingConfiguration.scale - config.scroll.width - config.scroll.margin;
    const scrollBarHeight = containerHeight * ((end - start) / total);
    let scrollBarFrame = null;
    graphics.clear();
    if (end - start < total) {
        graphics
            .beginFill(config.scroll.fill, isHovered ? config.scroll.hoveredAlpha : config.scroll.alpha);

        if (scrollBarHeight >= config.scroll.minHeight) {
            graphics.drawRect(
                x,
                topMargin + containerHeight * (start / total),
                config.scroll.width,
                scrollBarHeight
            );
            scrollBarFrame = {
                height: scrollBarHeight,
                width: config.scroll.width,
                x,
                y: topMargin + containerHeight * (start / total)
            };
        } else {
            graphics.drawRect(
                x,
                topMargin + containerHeight * (start / total) - (start / (total - end + start)) * config.minHeight,
                config.scroll.width,
                config.scroll.minHeight
            );
            scrollBarFrame = {
                height: config.scroll.minHeight,
                width: config.scroll.width,
                x,
                y: topMargin + containerHeight * (start / total) - (start / (total - end + start)) * config.minHeight
            };
        }
        graphics.endFill();
    }
    return scrollBarFrame;
}