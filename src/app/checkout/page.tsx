"use client";
import sign from "jwt-encode";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    width: 20vw;
`;

const PersonalInfo = styled.div`
    display:flex;
    justify-content:space-between;
`;

const CardInfo = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Document = styled.input`
    width:65%;
`;

export default function Checkout() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET as string;
    const cardNumberRef = useRef<HTMLInputElement>(null);
    const nameCardRef = useRef<HTMLInputElement>(null);
    const validateRef = useRef<HTMLInputElement>(null);
    const cvvRef = useRef<HTMLInputElement>(null);
    const documentRef = useRef<HTMLInputElement>(null);
    const birthdateRef = useRef<HTMLInputElement>(null);
    const installmentsRef = useRef<HTMLSelectElement>(null);

    const router = useRouter();

    const handlePayment = () => {
        if (
            cardNumberRef.current &&
            nameCardRef.current &&
            validateRef.current &&
            cvvRef.current &&
            documentRef.current &&
            birthdateRef.current &&
            installmentsRef.current
        ) {
            const cardForm = {
                cardNumber: cardNumberRef.current.value,
                nameCard: nameCardRef.current.value,
                validate: validateRef.current.value,
                cvv: cvvRef.current.value,
                document: documentRef.current.value,
                birthdate: birthdateRef.current.value,
                installments: installmentsRef.current.value
            };
            
            localStorage.setItem('card-form', JSON.stringify(sign(cardForm, secret)));

            localStorage.removeItem('cart-items');
            window.dispatchEvent(new CustomEvent('localStorageChange', {
                detail: { key: 'cart-items', value: [] } 
            }));

            handleNavigate();
        }
    };

    const handleNavigate = () => {
        router.push("/");
    };

    return (
        <Container>
            <input ref={cardNumberRef} placeholder="Card number" maxLength={16} />
            <input ref={nameCardRef} placeholder="Name card" maxLength={16} />
            <CardInfo>
                <input ref={validateRef} type="date" placeholder="Validate" />
                <input ref={cvvRef} placeholder="CVV" maxLength={3} />
            </CardInfo>
            <PersonalInfo>
                <Document ref={documentRef} placeholder="Document" maxLength={11} />
                <input ref={birthdateRef} type="date" placeholder="Birthdate" />
            </PersonalInfo>
            <select ref={installmentsRef}>
                <option value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
                <option value={4}>4x</option>
            </select>
            <button onClick={handlePayment}>Continue</button>
        </Container>
    );
}
