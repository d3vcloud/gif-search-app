import { useEffect, useState } from "react";

const useNearScreen = (distance: string, externalRef: any, once: boolean = true) => {

    const [isNearScreen, setNearScreen] = useState(false);

    //Definiendo el elemento a observar
    const element = externalRef?.current;
    
    useEffect(() => {

        /**
         * 
         * @param entries - son todos los elementos que intersectamos a medidas que nos desplazamos
         * @param observer - es la instancia del IntersectionObserver
         */
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