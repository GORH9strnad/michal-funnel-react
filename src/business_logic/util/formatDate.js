const formatDate = (time) => {
  if (!time) {
    return "No date provided";
  }

  const date = new Date(time);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
};

export default formatDate;
