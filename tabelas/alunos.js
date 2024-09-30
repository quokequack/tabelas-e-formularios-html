const alunos = [
    { 
        nome: 'Maria Clara',
        nota1: 10,
        nota2: 6,
        nota3: 4,
        nota4: 8,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Antonio Augusto',
        nota1: 2,
        nota2: 8,
        nota3: 1,
        nota4: 3,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Pedro Gonçalves da Costa',
        nota1: 10,
        nota2: 10,
        nota3: 9,
        nota4: 2,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Vívian Carla Marinho',
        nota1: 10,
        nota2: 8,
        nota3: 9,
        nota4: 10,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'João Gabriel da Costa Gomes',
        nota1: 6,
        nota2: 6,
        nota3: 5,
        nota4: 3,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Enzo Montanha',
        nota1: 6,
        nota2: 6,
        nota3: 5,
        nota4: 3,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Valentina Maria Ferreira dos Santos',
        nota1: 6,
        nota2: 10,
        nota3: 8,
        nota4: 7,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Mariana Gabriella',
        nota1: 6,
        nota2: 6,
        nota3: 5,
        nota4: 3,
        media: null,
        classificacao: '',
    },
    { 
        nome: "Matheus D'avila",
        nota1: 6,
        nota2: 6,
        nota3: 6,
        nota4: 7,
        media: null,
        classificacao: '',
    },
    { 
        nome: 'Eliomar Junior de Lima',
        nota1: 10,
        nota2: 2,
        nota3: 8,
        nota4: 6,
        media: null,
        classificacao: '',
    },
];

alunos.forEach((aluno) => {
    aluno.media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
    aluno.classificacao = aluno.media >= 6 ? 'Aprovado(a)' : 'Reprovado(a)';
});

function preencherTabela() {
    const tabela = document.querySelector('#alunos');
    const tbody = tabela.querySelector('tbody');
    const tfoot = tabela.querySelector('tfoot');

    tbody.innerHTML = '';
    tfoot.innerHTML = '';

    alunos.forEach((aluno) => {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = aluno.nome;
        tr.appendChild(tdNome);

        const tdNota1 = document.createElement('td');
        tdNota1.textContent = aluno.nota1;
        tr.appendChild(tdNota1);

        const tdNota2 = document.createElement('td');
        tdNota2.textContent = aluno.nota2;
        tr.appendChild(tdNota2);

        const tdNota3 = document.createElement('td');
        tdNota3.textContent = aluno.nota3;
        tr.appendChild(tdNota3);

        const tdNota4 = document.createElement('td');
        tdNota4.textContent = aluno.nota4;
        tr.appendChild(tdNota4);

        const tdMedia = document.createElement('td');
        tdMedia.textContent = aluno.media.toFixed(1); 
        tr.appendChild(tdMedia);

        const tdClassificacao = document.createElement('td');
        tdClassificacao.textContent = aluno.classificacao;
        tr.appendChild(tdClassificacao);

        tbody.appendChild(tr);
    });

    const trTotal = document.createElement('tr');
    const tdTotal = document.createElement('td');
    tdTotal.textContent = `Total de Alunos: ${alunos.length}`;
    tdTotal.colSpan = 7; 
    tdTotal.style.fontWeight = 'bold';
    tdTotal.style.textAlign = 'right';

    trTotal.appendChild(tdTotal);
    tfoot.appendChild(trTotal);
}

document.addEventListener('DOMContentLoaded', preencherTabela);
