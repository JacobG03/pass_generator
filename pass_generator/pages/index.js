import styled from 'styled-components'
import { useState, useEffect } from 'react'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgb(22, 27, 34);
  color: rgb(170, 170, 170);
`

const GenerateSection = styled.div`
  width: 100%;
  max-width: 340px;
  height: fit-content;
  padding: 4rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(42, 49, 56);
  gap: 2rem;
`

const InputOptions = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const LengthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`

const SelectLength = styled.select`
  flex-grow: 1;
  height: 2rem;
`

const Checkbox = styled.input`
  width: 2rem;
  height: 2rem;
  margin: 0;
`

const NumbersSection = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const Label = styled.label`
  width: 40%;
`

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 8px;
  color: rgb(170, 170, 170);
  background-color: rgb(0,100,0);
  cursor: pointer;
`

const GeneratedPassword = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 1rem;
`

const Password = styled.input`
  width: 75%;
`

const Copy = styled.button`
  width: 25%;
  height: 2rem;
`

export default function Home() {
  const [length, setLength] = useState(1)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [password, setPassword] = useState(null)
  const generator = require('generate-password');

  useEffect(() => {
  }, [includeNumbers, length])

  const generatePassword = () => {
    let password = generator.generate({
      length: length,
      numbers: includeNumbers
    })
    setPassword(password)
  }

  return (
    <Container>
      <GenerateSection>
        <InputOptions>
          <LengthSection>
            <Label htmlFor='length'>Choose length</Label>
            <SelectLength name='length' onChange={e => setLength(e.target.value)} >
              {Array.from(Array(257).keys()).map(number => number > 0 ?
                <option value={number} key={number}>{number}</option>
                : null)}
            </SelectLength>
          </LengthSection>
          <NumbersSection>
            <Label htmlFor='numbers'>Include numbers</Label>
            <Checkbox name='numbers' type='checkbox' onClick={() => setIncludeNumbers(prev => !prev)} />
          </NumbersSection>
        </InputOptions>
        <Button onClick={() => generatePassword()}>Generate</Button>
        {password ? 
        <GeneratedPassword>
          <Password value={password} disabled/>
          <Copy onClick={e => {navigator.clipboard.writeText(password)}}>Copy</Copy>
        </GeneratedPassword>: null}
      </GenerateSection>
    </Container>
  )
}
