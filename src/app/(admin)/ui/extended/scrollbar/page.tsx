import type {Metadata} from 'next';
import AllScrollbars from "@/app/(admin)/ui/extended/scrollbar/AllScrollbars";

export const metadata: Metadata = {title: 'Scrollbar'};

const ScrollbarUI = () => {
    return (
        <AllScrollbars/>
    );
};

export default ScrollbarUI;
