export function isGameVisible(game, visibleStages) {
    return visibleStages.some(stage => stage.title === game.bracket && stage.isVisible);
}