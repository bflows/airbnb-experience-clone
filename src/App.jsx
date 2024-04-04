import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}
