const statisticsLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

const statisticsRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

const listAnimation = {
    hiddenLeft: {
        x: -100,
        opacity: 0,
    },
    hiddenRight: {
        x: 100,
        opacity: 0,
    },
    firstRender: custom => ({
        x: 0,
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.4 * custom },
    }),
    nextRenders: {
        x: 0,
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.2 },
    }
}

const textAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 },
    },
}

export { textAnimation, statisticsLeft, statisticsRight, listAnimation };