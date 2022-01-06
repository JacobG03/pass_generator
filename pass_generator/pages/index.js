import styled from 'styled-components'


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

export default function Home() {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}
