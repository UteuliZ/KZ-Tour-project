import { format } from 'date-fns';

const currentDate = new Date();
const formattedDate = format(currentDate, 'dd/MM/yyyy');
console.log(formattedDate);