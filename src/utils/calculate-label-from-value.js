function calculateLabelFromValue(value, labels, minValue, maxValue) {
  const currentValue = (value - minValue) / (maxValue - minValue);
  const currentIndex = Math.ceil((labels.length - 1) * currentValue);
  const label = labels[currentIndex];
  return label;
}

export default calculateLabelFromValue;
