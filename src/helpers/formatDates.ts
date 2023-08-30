import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears, format } from 'date-fns';

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

export const formatTime = (input: number | string): string => {
  let totalSeconds: number;

  if (typeof input === 'number') {
    // Si el input es un número, asumimos que está en segundos.
    totalSeconds = input;
  } else if (typeof input === 'string') {
    // Si el input es una cadena, intentamos interpretar su formato.
    const timeParts = input.split(':').map(Number);
    
    if (timeParts.length === 3) {
      const [hours, minutes, seconds] = timeParts;
      totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    } else if (timeParts.length === 2) {
      const [minutes, seconds] = timeParts;
      totalSeconds = (minutes * 60) + seconds;
    } else if (timeParts.length === 1) {
      const [seconds] = timeParts;
      totalSeconds = seconds;
    } else {
      throw new Error('Invalid string format. Only HH:MM:SS, MM:SS, or SS formats are allowed.');
    }
  } else {
    throw new Error('Invalid input type. Only number or string in HH:MM:SS, MM:SS, or SS format are allowed.');
  }

  const date = new Date(0, 0, 0, 0, 0, totalSeconds, 0);
  return format(date, 'HH:mm:ss');
};