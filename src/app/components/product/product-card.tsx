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
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
`

const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    gap: 30px;
`

export function ProductCard(props: ProductCardProps){ 
    return (
        <Card>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={800}
                    height={500}
                    />
            <Principal>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Principal>
            <ValuesDiv>
                <h3>R$ {props.price}</h3>
                <p>{props.weight} KG</p>
            </ValuesDiv>
            </Card>
    )
}