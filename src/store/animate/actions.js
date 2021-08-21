export const animateActionsTypes = {
  SET_START_ANIMATE: 'ANIMATE.SET_START_ANIMATE',
};

export const animateActions = {
  setStartAnimate: isAnimate => ({
    type: animateActionsTypes.SET_START_ANIMATE,
    payload: isAnimate,
  }),
};
