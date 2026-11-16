import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Lista from "./components/Lista/Lista";

function App() {
  const topicos = [
    "JSX e regras de sintaxe (className, fechamento de tags)",
    "Componentização e passagem de dados via props",
    "Renderização de listas com .map() e prop key",
    "Fragments (<>...</>) para elemento raiz único"
  ];

  return (
    <>
      <Header title="Minha Primeira Aplicação React" />

      <main className="container">
        <Card
          tag="Componente Base"
          title="Card com Props"
          description="Recebe título, descrição e tag dinamicamente pelo componente pai."
        />

        <section>
          <h2>Tópicos da Aula</h2>
          <Lista items={topicos} />
        </section>
      </main>

      <Footer text="Desenvolvido com React + Vite • 2026" />
    </>
  );
}

export default App;