import { useEffect, useState } from "react";

const useNearScreen = (distance: string, externalRef: any, once: boolean = true) => {

    const [isNearScreen, setNearScreen] = useState(false);

    const element = externalRef?.current;
    console.log(element);
    useEffect(() => {

        const onChange = (entries: any, observer: any) => {
            const el = entries[0];
            if(el.isIntersecting){
                setNearScreen(true);
                once && observer.disconnect();
            }else {
                once || setNearScreen(false);
            }
        }

        const observer = new IntersectionObserver(onChange,{
            rootMargin: distance
        });

       if(element) observer.observe(element);

       return () => observer && observer.disconnect()
    })

    return isNearScreen;
}

export default useNearScreen;