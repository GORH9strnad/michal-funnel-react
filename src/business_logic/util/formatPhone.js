function formatPhone(phone) {
  return phone.replace(/(.{3})(?=\S)/g, "$1 ");
}

export { formatPhone };
