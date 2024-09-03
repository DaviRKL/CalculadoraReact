import { InputContainer } from "./styles";

interface InputProps{ 
    value: string;
}
const Input:React.FC<InputProps> = ({value}) => {
    return (
        <InputContainer>
            <input value={value}/>
        </InputContainer>
    
    )

}

export default Input;