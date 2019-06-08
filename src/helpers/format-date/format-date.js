export const formatDate = (dateToFormat) => {
  const locale = `en`;
  const date = new Date(dateToFormat);

  const formatterWithOptions = new Intl.DateTimeFormat(locale, {
    year: `numeric`,
    month: `long`,
    day: `numeric`
  });

  const formatter = new Intl.DateTimeFormat(locale);

  return {
    comprehensible: formatterWithOptions.format(date),
    localFormat: formatter.format(date)
  };
};
