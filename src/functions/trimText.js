const trimText = (str, nb) => {
  let nbChar = nb;

  let trimmedString = str.substr(0, nbChar);

  if (str.length > trimmedString.length) {
    trimmedString =
      trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      ) + "...";
  }
  return trimmedString;
};

export { trimText };
