import { parse, isValid, format } from "date-fns";
import { es } from "date-fns/locale";

/**
 * Ordena una colección de elementos en orden descendente basado en su fecha.
 * @param collection - La colección de elementos a ordenar.
 * @param dateFormat - El formato de fecha utilizado en los datos (por defecto: 'dd/MM/yyyy').
 * @returns La colección ordenada.
 */

export const sortByDateDescending = <T extends { data: { date: string } }>(
  collection: T[],
  dateFormat: string = "dd/MM/yyyy"
): T[] =>
  collection.sort((a, b) => {
    const dateA = parse(a.data.date, dateFormat, new Date());
    const dateB = parse(b.data.date, dateFormat, new Date());

    const timeA = isValid(dateA) ? dateA.getTime() : 0;
    const timeB = isValid(dateB) ? dateB.getTime() : 0;

    return timeB - timeA;
  });

/**
 * Extrae un número limitado de palabras del contenido.
 * @param content - El contenido de donde extraer las palabras.
 * @param wordLimit - El número máximo de palabras a extraer (por defecto: 11).
 * @returns Las primeras palabras seguidas de '...' si se excede el límite.
 */
export const extractFirstWords = (
  content: string,
  wordLimit: number = 15
): string => {
  const plainText = content.replace(/(<([^>]+)>)/gi, ""); // Remover etiquetas HTML
  const words = plainText.split(" ").slice(0, wordLimit).join(" ");
  return words + (plainText.split(" ").length > wordLimit ? "..." : "");
};

/**
 * Genera un slug a partir de una cadena de texto.
 * @param title - El título o cadena a convertir en slug.
 * @returns El slug generado.
 */
export const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remueve acentos
    .replace(/ñ/g, "n") // Reemplaza la ñ por n
    .replace(/\s+/g, "-") // Convierte espacios en guiones
    .replace(/[^a-z0-9\-]/g, ""); // Remueve caracteres especiales
};

/**
 * Formatea una fecha a un formato en español.
 * @param date - La fecha en formato string.
 * @param inputFormat - El formato de entrada de la fecha (por defecto: 'dd/MM/yy').
 * @param outputFormat - El formato de salida (por defecto: "d 'de' MMMM 'de' yyyy").
 * @returns La fecha formateada.
 */
export const formatDateInSpanish = (
  date: string,
  inputFormat: string = "dd/MM/yy",
  outputFormat: string = "d 'de' MMMM 'de' yyyy"
): string => {
  const parsedDate = parse(date, inputFormat, new Date());
  return format(parsedDate, outputFormat, { locale: es });
};
