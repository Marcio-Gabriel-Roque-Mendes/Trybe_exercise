import { useState } from "react"

function FormularioHooks() {
const [nome, setNome] = useState('')
const [cidade, setCidade] = useState('')
const [idade, setIdade] = useState(0)
const [modulo, setModulo] = useState();


return(
    <section>
    <label htmlFor="nome-completo">
        Nome:
        <input
          type="text"
          name="nome"
          data-testid="nome-completo"
          value={ nome }
          onChange={ (event) => setNome(event.target.value) }
        />
      </label>

      <label htmlFor="cidade-de-residencia">
        Cidade:
        <input
          type="text"
          name="cidade"
          data-testid="cidade-de-residencia"
          value={ cidade }
          onChange={ (event) => setCidade(event.target.value) }
        />
      </label>

      <label htmlFor="sua-idade">
        Idade:
        <input
          type="number"
          name="idade"
          data-testid="sua-idade"
          value={ idade }
          onChange={ (event) => setIdade(event.target.value) }
        />
      </label>
        
      <label htmlFor="radio-fundamentos">
        Fundamentos
        <input
          type="radio"
          name="fundamentos"
          data-testid="radio-fundamentos"
          value="fundamentos"
          checked={modulo === 'Fundamentos'}
          onClick={ ({ target: { value } }) => setModulo(value) }
        />
      </label>

      <label htmlFor="radio-front-end">
      Front-end
        <input
          type="radio"
          name="frontEnd"
          data-testid="radio-front-end"
          value="frontEnd"
          checked={modulo === 'Front-end'}
          onClick={ ({ target: { value } }) => setModulo(value) }
        />
      </label>

      <label htmlFor="radio-back-end">
      Back-end
        <input
          type="radio"
          name="backEnd"
          data-testid="radio-back-end"
          value="backEnd"
          checked={modulo === 'Back-end'}
          onClick={ ({ target: { value } }) => setModulo(value) }
        />
      </label>

      <label htmlFor="radio-cs">
      Ciência da computação
        <input
          type="radio"
          name="cs"
          data-testid="radio-cs"
          value="cs"
          checked={modulo === 'Ciência da computação'}
          onClick={ ({ target: { value } }) => setModulo(value) }
        />
      </label>


      <button
        type="button"
        data-testid="button-submit"
        // onClick={ () => handleClick() }
      >
        Enviar
      </button>
    </section>
)
    
}

export default FormularioHooks