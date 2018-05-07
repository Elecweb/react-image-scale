export const checkIsPortrait = (
  childWidth,
  childHeight,
  parentWidth,
  parentHeight
) => {
  const ratio = childWidth / childHeight;
  const pratio = parentWidth / parentHeight;
  if (ratio < pratio) {
    return true;
  }
  return false;
};

export const flexAlign = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
};
