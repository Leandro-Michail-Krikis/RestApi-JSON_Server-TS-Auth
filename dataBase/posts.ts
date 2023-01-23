const posts = [];

for (let i = 0; i < 2; i++) {
  posts.push({
    id: i,
    titulo: "Titulo " + i,
    descricao: "Teste descricao " + i,
  });
}

export default posts