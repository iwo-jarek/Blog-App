
const dateToStr = (date) => {
  const dateStart = n => n.toString().padStart(2, '0');
  const month = (date.getMonth() +1);
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dateStart(day)}/${dateStart(month)}/${year}`;
};

export default dateToStr;