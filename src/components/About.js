import { useEffect, useState } from "react"

function About() {
    let [listItems, setSomeStuff] = useState([]);

    useEffect(() => {
        let mounted = true;
        const doStuff = async () => {
            const a = await fetch('https://jsonplaceholder.typicode.com/posts');
            const b = await a.json(); //pitää tehdä jotain, että saadaan oikea data a:sta
            if(mounted) {
                setSomeStuff(b);
            }
            //tarkastetaan, että komponentti on tarkistettu
            
        };
        doStuff();
        return () => {
            mounted = false;
        };

        //Jos komponenttia ei ole irroitettu, useEffect pysähtyy ja palautuu
        //Palautuksessa asetetaan vääräksi ja tehdään doStuff funktio
    


    }, []);

    const postList = (
        <ul>
            {listItems.map((b) =>(
                <li key={b.id}>{b.title}</li>
            ))}
        </ul>
    );

    if (listItems) {
        return <div>{listItems && postList}</div>;
    }
    else {
        return null;
    }

}

export default About;
