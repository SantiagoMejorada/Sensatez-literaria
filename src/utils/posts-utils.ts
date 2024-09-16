import { parse, isValid } from 'date-fns';

/**
 * Ordena una colección de elementos en orden descendente basado en su fecha.
 * @param collection - La colección de elementos a ordenar.
 * @param dateFormat - El formato de fecha utilizado en los datos (por defecto: 'dd/MM/yyyy').
 * @returns La colección ordenada.
 */

export const sortByDateDescending = <T extends { data: { date: string } }>(
    collection: T[],
    dateFormat: string = 'dd/MM/yyyy'
): T[] =>
    collection.sort((a, b) => {
        const dateA = parse(a.data.date, dateFormat, new Date());
        const dateB = parse(b.data.date, dateFormat, new Date());

        const timeA = isValid(dateA) ? dateA.getTime() : 0;
        const timeB = isValid(dateB) ? dateB.getTime() : 0;

        return timeB - timeA;
    });