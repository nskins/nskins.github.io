export type Project = {
  name: string;
  image: string;
  description: string;
  technologies: string;
  source: string;
}

const projects: Project[] = [
  {
    name: "Primality",
    image: "primality.png",
    description: "This service is designed to handle primality test requests in parallel by allowing end users to spin up multiple worker nodes and thereby prevent system bottlenecks.",
    technologies: "Elixir, RabbitMQ",
    source: "https://github.com/nskins/primality"
  },
  {
    name: "Personal Website",
    image: "personal_website.png",
    description: "You're currently looking at it!",
    technologies: "TypeScript, React, Next.js, Tailwind CSS",
    source: "https://github.com/nskins/nskins.github.io"
  },
  {
    name: "Banana Catch",
    image: "banana_catch.png",
    description: "An arcade game in which you catch bananas in your basket to distribute to the potassium-deprived people of Earth.",
    technologies: "Rust, Bevy",
    source: "https://github.com/nskins/banana_catch"
  },
  {
    name: "WeLift",
    image: "we_lift.png",
    description: "This powerful and innovative system enables you to track your workouts in as much detail as you need. You'll never again have to rely on memory and guess a suitable weight for your next lift. ",
    technologies: "Elixir, Phoenix LiveView, Tailwind CSS, PostgreSQL",
    source: "https://github.com/nskins/we_lift"
  },
  {
    name: "DFA Simulator",
    image: "dfa-simulator.png",
    description: "A simple library that provides tools for users to define and simulate their own deterministic finite automata.",
    technologies: "Haskell",
    source: "https://github.com/nskins/dfa-simulator"
  },
  {
    name: "My Food Is What?!",
    image: "my-food-is-what.png",
    description: "This project aims to inform consumers about the ingredients on food packaging labels.",
    technologies: "Elm, Elixir, Phoenix, PostgreSQL",
    source: "https://github.com/nskins/my-food-is-what"
  },
  {
    name: "Goby",
    image: "goby.png",
    description: "Goby is a framework for creating CLI-based role-playing games. Goby comes with out-of-the-box support for 2D map development, background music, monster battles, and more.",
    technologies: "Ruby",
    source: "https://github.com/nskins/goby"
  }
]

export { projects } 