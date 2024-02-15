import { FormEvent, useRef, useState } from 'react'
import { Container } from './styles'

export default function Main() {
  const valueInputRef = useRef<HTMLInputElement>(null);
  const fromConvertInputRef = useRef<HTMLSelectElement>(null);
  const toConvertInputRef = useRef<HTMLSelectElement>(null);
  const [show, setShow] = useState(0)

  const dolar = 5.7;
  const euro = 5.9;


  const Convert = (value: number,  to:string) =>{

    if(to == "usd"){
      return setShow(value * dolar)
    }else{
      if(to == "eur"){
      return setShow(value * euro)
      }
    }
}

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const fromConvert = fromConvertInputRef.current?.value;
    const toConvert = toConvertInputRef.current?.value;
    const rawValue = valueInputRef.current?.value;
    const value = rawValue ? parseInt(rawValue, 10) : 0;


    if ((fromConvert && fromConvert.trim() !== '')&&(toConvert && toConvert.trim() !== '')) {
          console.log(value, toConvert)
          Convert(value, toConvert)
    };


  }


  return (
    <Container>
      <h1>Conversor</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Adicione o valor"
        ref={valueInputRef}
      />

      <select name="toCurrency" required ref={fromConvertInputRef}>

            <option value="brl">Real (BRL)</option>

      </select>
      <select  name="fromCurrency" required ref={toConvertInputRef}>

            <option value="usd">Dólar Americano (USD)</option>
            <option value="eur">Euro (EUR)</option>

      </select>




      <button type="submit">Converter</button>
    </form >
    <h1>{show >0 ? show: "" }</h1>
    </Container>
  )
 }
