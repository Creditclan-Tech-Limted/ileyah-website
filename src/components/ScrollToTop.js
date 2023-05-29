import { useEffect } from "react";
import {usePathname} from 'next/navigation';

export default function ScrollToTop() {
    const router = usePathname()

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [router])
}