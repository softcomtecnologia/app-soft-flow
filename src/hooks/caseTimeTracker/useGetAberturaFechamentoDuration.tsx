export default function useGetAberturaFechamentoDuration(start?: string, end?: string)  {
    if (!start || !end) {
        return null;
    }

    const startTime = new Date(start);
    const endTime = new Date(end);

    if (Number.isNaN(startTime.getTime()) || Number.isNaN(endTime.getTime())) {
        return null;
    }

    const diffMs = Math.max(endTime.getTime() - startTime.getTime(), 0);
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}`;
};