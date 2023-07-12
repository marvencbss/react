export default App
import './App.css'

export function Introducao() {
  const nome = 'Marven';
  return (
    <div ClassName='comp'>
    <h2>Introdução</h2>
    <p>Meu nome é {nome}</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur quod doloribus. Vel suscipit hic nostrum nemo aut error. Dolorum at voluptas provident! Beatae perferendis voluptates delectus officiis, soluta inventore!</p>
    </div>
  )
}

export function App() {
  let imgRobo = document.createElement('img');
  imgRobo.querySelector('img')
document.appendChild(imgRobo)

  function gerarRobo() {
  imgRobo.src = "https://robohash.org/" + Math.random;
  }
  return (
    <div ClassName='comp'>
    <h2>componente img robo</h2>
    <p>
    {gerarRobo}
    </p>
    </div>
  )
}
