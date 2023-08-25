import { FiltersContainer, InputContainer } from "./StyleFilters";


export function Filters() {
    return (
        
        <FiltersContainer>
            <h3>Filtros</h3>
            <InputContainer>
            Valor mínimo:
            <input 
            type="number" 
            />
            </InputContainer>
            <InputContainer>
            Valor máximo:
            <input 
            type="number" 
            />
            </InputContainer>
            <InputContainer>
            Buscar por nome:
            <input 
            type="text" 
            />
            </InputContainer>
        </FiltersContainer>
        
    )
}