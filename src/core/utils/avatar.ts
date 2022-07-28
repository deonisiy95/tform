const COLORS = [
  '#FED6BC',
  '#FFFADD',
  '#DEF7FE',
  '#E7ECFF',
  '#C3FBD8',
  '#FDEED9',
  '#F6FFF8',
  '#B5F2EA',
  '#C6D8FF'
];

export const getColorById = (id: number): string => {
  const length = COLORS.length - 1;
  const i = id % length;

  return i > -1 ? COLORS[i] : COLORS[length];
};

export const getInitials = (name: string): string => {
  return (name ?? '')
    .split(' ')
    .slice(0, 2)
    .map(i => i[0])
    .join('')
    .toUpperCase();
};
