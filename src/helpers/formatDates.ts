import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export const defaultFormatDate = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  
  // Encuentra la diferencia en diferentes unidades de tiempo
  const mins = differenceInMinutes(now, date);
  const hours = differenceInHours(now, date);
  const days = differenceInDays(now, date);
  const months = differenceInMonths(now, date);
  const years = differenceInYears(now, date);
  
  // Formatea el string de salida según la unidad de tiempo más adecuada
  if (mins < 60) {
    return `hace ${mins} ${mins === 1 ? 'minuto' : 'minutos'}`;
  }
  
  if (hours < 24) {
    return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }
  
  if (days < 30) {
    return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
  }

  if (months < 12) {
    return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
  }

  return `hace ${years} ${years === 1 ? 'año' : 'años'}`;
}