import { FiltersContainer, InputContainer } from "./StyleFilters";


export function Filters(props) { 
// console.log(props);

const limparFiltros = () => {
    // event.preventDefault()
    props.setMinfilter("")
    props.setMaxFilter("")
    props.setSearchFilter("")
  }

    return (
        
        <FiltersContainer>
            <h3>Filtros</h3>
            <InputContainer>
            Valor mínimo:
            <input 
            type="number"
            value={props.minFilter}
            onChange={props.filtrarValorMinimo}
            min="0"  
            />
            </InputContainer>
            <InputContainer>
            Valor máximo:
            <input 
            type="number"
            value={props.maxFilter}
            onChange={props.filtrarValorMaximo}
            min="0"  
            />
            </InputContainer>
            <InputContainer>
            Buscar por nome:
            <input 
            type="text"
            value={props.searchFilter}
            onChange={props.filtrarPorNome}  
            />
            </InputContainer>
            <button onClick={limparFiltros}>Limpar filtros</button>
        </FiltersContainer>
        
    )
}