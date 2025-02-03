import {Card} from '@/features/publicPage/CardsList/Card';



export const CardsList = async()=>{

    // Должна быть СЕРВЕРНАЯ КОМПОНЕНТА, возвр 4 поста и подгружать каждую минуту новые

    const res = await fetch('https://smart-reg.org.ru/api/v1/users', {next: { revalidate: 60 },})
    const data = await res.json();


    return (
        <>
           {/* {data.map((card:any) => <Card card={card}/>)}*/}
        </>
    )
}