import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const Button = styled.button`
    background: #115D8C;
    border-radius: 4px;
    color: white;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
`

interface BtnProps {
    navigate: string;
}

export function BackBtn({ navigate }: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <Button onClick={handleNavigate}>
            Back
        </Button>
    )
}
