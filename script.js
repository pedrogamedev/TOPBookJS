let BookList = [];

const btnForms = document.getElementById("openForms");
const btnClose = document.getElementById("close");
const btnSend = document.getElementById("sendData");

//constructor do object book

function Book(nome, ano, read)
{
    this.nome = nome;
    this.ano = ano;
    this.read = read;
}


// Botao para abrir forms
btnForms.addEventListener('click', ()=>
{
    document.getElementById("forms").style.visibility="visible";
  
});

// Botao para fechar forms
btnClose.addEventListener('click', ()=>
{
    document.getElementById("forms").style.visibility="hidden";
});

// Botao para mandar os dados
btnSend.addEventListener('click', ()=>
{
    if(GetForms())
    {
        document.getElementById("forms").style.visibility="hidden";
        addBook(nome, num, read);
    }
});

// Pegar informacoes do forms
function GetForms()
{

    // pegando valores dos inputs
    const inputName = document.getElementById("bookName").value;
    const inputNum = document.getElementById("year").value;
    const inputRead = document.getElementById("read").checked;
    
// validacao de forms

    // verificando se algum livro ja tem esse nome
    for(let i = 0; i < BookList.length; i++)
    {
        if(BookList[i].nome == inputName)
        {
            alert("Book already added");
            return false;
        }
    }

    // verificando se o nome tem mais que 25 caracteres
    if(inputName.length > 25)
    {
        alert("Insira um nome de ate 25 caracteres!");
        return false;
    }
    // verificando se o nome esta vazio
    else if(inputName.length == 0)
    {
        alert("Insira um nome!");
        return false;
    }
    // verificando se o ano tem mais que 10 caracteres
    else if(inputNum.length > 10)
    { 
        alert("Insira um ano de ate 10 caracteres!");
        return false;
    }
    // verificando se o ano nao esta vazio
    else if(inputNum.length == 0)
    { 
        alert("Insira um ano!");
        return false;
    }

    return true, nome = inputName, num = inputNum, read = inputRead;
} 

function addBook(nome, ano, read)
{
    BookList.push(new Book(nome,ano,read));
    updateGrid();
}

// fucao que refaz o grid, ou seja retira todos os items e 
// repoe com a lista atualizadas

function updateGrid()
{
    const bookGrid = document.getElementById("bookGrid");

    //limpando o grid

    let child = bookGrid.lastElementChild;
    while(child)
    {
        bookGrid.removeChild(child);
        child = bookGrid.lastElementChild;
    }

    // adicionando items ao grid

    for(i = 0; i<BookList.length; i++)
    {
        // criando elementos

        const book = document.createElement("div");
        book.classList.add("block");

        const bookName = document.createElement("p");
        bookName.classList ="nome Livro";
        bookName.innerHTML = "Name:<br>\"" + BookList[i].nome + "\"";

        const bookYear = document.createElement("p");
        bookYear.classList = "ano";
    
        bookYear.innerHTML ="Year: <br>" + BookList[i].ano;

        // estilizacao de ano

        if(BookList[i].ano < 0)
        {
            bookYear.innerHTML ="Year<br>" +BookList[i].ano *-1 + " B.C.";
        }
        else if(BookList[i].ano =="-0")
        {
            bookYear.innerHTML ="Year: <br>0"      
        }

        // estilizacao de botao de read

        const readButton = document.createElement("button");
        readButton.classList = "read";
        if(BookList[i].read)
        {
            
        }
        else
        {

        }

        // colocando os tags nos seus devidos lugares

        book.appendChild(bookName);
        book.appendChild(bookYear);
        bookGrid.appendChild(book);

        // atualizando a quantidade de livros

        let books = i+1;
        const bookQnt = document.getElementById("qntBooks");

        if(books == 1)
        {
            bookQnt.innerHTML = "There is "+ books + " book in this List";
        }
        else if(books == 0)
        {
            bookQnt.innerHTML = "There are no books in this List";
        }
        else 
        {
            bookQnt.innerHTML = "There are "+ books + " books in this List";
        }
    }
}

