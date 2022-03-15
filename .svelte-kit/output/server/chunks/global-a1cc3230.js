function toProperCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function formatTime(datetime) {
  if (datetime) {
    try {
      const _hours = datetime.getHours();
      const _minutes = datetime.getMinutes();
      const hours = _hours < 10 ? "0" + _hours : _hours;
      const minutes = _minutes < 10 ? "0" + _minutes : _minutes;
      return `${hours}:${minutes}`;
    } catch (err) {
      return err.message;
    }
  }
  return "";
}
function formatDateTime(datetime) {
  if (datetime) {
    try {
      const year = datetime.getFullYear();
      const _month = datetime.getMonth() + 1;
      const _day = datetime.getDate();
      const month = _month < 10 ? "0" + _month : _month;
      const day = _day < 10 ? "0" + _day : _day;
      const _hours = datetime.getHours();
      const _minutes = datetime.getMinutes();
      const hours = _hours < 10 ? "0" + _hours : _hours;
      const minutes = _minutes < 10 ? "0" + _minutes : _minutes;
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    } catch (err) {
      return err.message;
    }
  }
  return "";
}
export { formatTime as a, formatDateTime as f, toProperCase as t };
