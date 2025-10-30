export default function useFormatTimer(timeString: string)  {
    return new Date(timeString).toLocaleString('pt-BR');
};