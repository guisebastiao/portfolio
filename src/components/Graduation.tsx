import UnisulLogo from "@/assets/unisul-logo.jpeg";

export const Graduation = () => {
  const currentSemester = 3;
  const semesteTotals = 8;
  const progress = (currentSemester * 100) / semesteTotals;

  return (
    <section
      className="max-w-6xl w-full min-h-screen flex flex-col items-center gap-5 py-5"
      data-container="3"
    >
      <h2 className="text-4xl w-full text-white font-medium tracking-tighter">
        Graduação
      </h2>
      <p className="max-w-2xl w-full text-zinc-400 self-start">
        Abaixo estão as tecnologias que utilizo e nas quais possuo conhecimento
        para o desenvolvimento de sites, aplicativos, automações e outras
        finalidades.
      </p>
      <div className="w-full p-4">
        <header className="flex w-full items-center gap-5">
          <div className="w-42">
            <img
              src={UnisulLogo}
              alt="unisul-logo"
              className="aspect-square w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-white font-bold text-2xl pb-2">
              Ciência da Computação
            </h2>
            <span className="text-zinc-400 text-sm">
              <strong className="text-white">Unisul</strong> - Universidade do
              Sul de Santa Catarina
            </span>
            <progress
              value={progress}
              max={100}
              className="appearance-none w-full h-3 [&::-webkit-progress-bar]:bg-zinc-800 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-indigo-500 [&::-webkit-progress-value]:rounded-full my-2"
            />
            <span className="text-zinc-500 text-[15px]">
              <strong className="text-white">{progress}%</strong> concluido de{" "}
              {semesteTotals} semestres
            </span>
          </div>
        </header>
        <div>
          <header className="flex justify-between items-center my-6 px-2">
            <h2 className="text-white text-xl font-semibold">
              {currentSemester}° Semestre
            </h2>
            <span className="text-xs border border-emerald-500 rounded px-2 py-0.5 text-white font-light bg-emerald-900">
              Em progresso
            </span>
          </header>
          <div className="flex justify-center">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Unidade Curricular</th>
                  <th>Nota</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ambientes computacionais e conectividade</td>
                  <td>90</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Análise de dados e big data</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Computação gráfica e realidade virtual</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Core curriculum</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Estruturas de dados e análise de algoritmos</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Estruturas matemáticas</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Gestão e qualidade de software</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>
                    Inovação, sustentabilidade e competitividade empresarial
                  </td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Inteligência artificial</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Modelagem de software</td>
                  <td>70</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Modelos, métodos e técnicas da engenharia de software</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Programação de soluções computacionais</td>
                  <td>98</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Sistemas computacionais e segurança</td>
                  <td>91</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Sistemas distribuídos e mobile</td>
                  <td></td>
                  <td>Cursando</td>
                </tr>
                <tr>
                  <td>Teoria da computação e compiladores</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
                <tr>
                  <td>Usabilidade, desenvolvimento web, mobile e jogos</td>
                  <td></td>
                  <td>Cursando</td>
                </tr>
                <tr>
                  <td>Vida & Carreira</td>
                  <td>100</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Unidade curricular digital personalizável I</td>
                  <td></td>
                  <td>A cursar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
