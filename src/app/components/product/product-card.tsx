"use client"
import Image from "next/image"
import styled from "styled-components"

interface ProductCardProps{
    image: string,
    title: string,
    price: number,
    description: string,
    measure: string,
    weight: number
}   

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    border: 1px solid #ccc;
    
    img {
        width: 256px;
        height: 300px;
    }
    h3{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #000;
    }
    p{
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 1rem;
        color: #000;
    }
`

const ValuesDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
`

const Principal = styled.div`
    display: flex;Principal
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
`

export function ProductCard(props: ProductCardProps){ 
    return (
        <Card>
            <Principal>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={800}
                    height={500}
                    />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Principal>
            <ValuesDiv>
                <p>R$ {props.price}</p>
                <p>{props.weight} KG</p>
            </ValuesDiv>
            </Card>
    )
}