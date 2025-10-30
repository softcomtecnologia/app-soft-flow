export const formatTipoLabel = (tipo: string) =>
		tipo
        .replace(/_/g, ' ')
        .toLowerCase()
.replace(/\b\w/g, (char) => char.toUpperCase());