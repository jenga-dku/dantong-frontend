export const handleCustomCSS = (defaultStyle: string, customStyle: string) => {
  const splittedCustomStyleList = customStyle
    .split(' ')
    .map((property) => property.split('-'));

  const customStyleProperty = splittedCustomStyleList.map(
    (property) => property.length > 1 && property[0],
  );

  const splittedDefaultStyleList = defaultStyle
    .split(' ')
    .map((property) => property.split('-'));

  const filteredDefaultStyleList = splittedDefaultStyleList
    .map((property) =>
      property.length > 1
        ? customStyleProperty.includes(property[0])
          ? null
          : `${property[0]}-${property[1]}`
        : `${property[0]}`,
    )
    .filter((item) => item !== null);

  const filteredDefaultStyle = filteredDefaultStyleList.join(' ');

  const finalStyle = `${filteredDefaultStyle} ${customStyle}`;

  return finalStyle;
};
