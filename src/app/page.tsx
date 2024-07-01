"use client"

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 50vh;
`;

export default function Home() {
    const [documentNumber, setDocumentNumber] = useState("");
    const router = useRouter();

    const handleValidate = () => {
        if (documentNumber.trim() !== "") {
            handleNavigate();
        } else {
            alert("Please enter your document number.");
        }
    };

    const handleNavigate = () => {
        router.push("/products");
    };

    return (
        <Container>
            <label>Text your document number</label>
            <input 
                type="text" 
                value={documentNumber} 
                onChange={(e) => setDocumentNumber(e.target.value)} 
                maxLength={16}
            />
            <button onClick={handleValidate}>Submit</button>
        </Container>
    );
}
