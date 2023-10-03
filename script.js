let BookList = [];

const btnForms = document.getElementById("openForms");
const btnClose = document.getElementById("close");
const btnSend = document.getElementById("sendData");

//constructor do object book

function Book(nome, ano)
{
    this.nome = nome;
    this.ano = ano;
}


btnForms.addEventListener('click', ()=>
{
    document.getElementById("forms").style.visibility="visible";
    document.getElementById("forms").style.height= document.getElementsByID(bookGrid).height;
});

btnClose.addEventListener('click', ()=>
{
    document.getElementById("forms").style.visibility="hidden";
});

btnSend.addEventListener('click', ()=>
{
    if(validateForms())
    {
        document.getElementById("forms").style.visibility="hidden";
        addBook(nome, num);
    }
    else
    {
        alert("O texto inserido nao e valido, insira um nome de ate 25 letras")
    }
});


function validateForms()
{
    const inputName = document.getElementById("bookName").value;
    const inputNum = document.getElementById("year").value;
    if(inputName.length > 25 || inputName.length == 0)
    {
        return false;
    }
    else if(inputNum.length == 0)
    {
        return false;
    }
    return true, nome = inputName, num = inputNum;
} 

function addBook(nome, ano)
{
    BookList.push(new Book(nome,ano));
    updateGrid();
}

function updateGrid()
{

    const bookGrid = document.getElementById("bookGrid");

    let child = bookGrid.lastElementChild;
    while(child)
    {
        bookGrid.removeChild(child);
        child = bookGrid.lastElementChild;
    }
    for(i = 0; i<BookList.length; i++)
    {
        const book = document.createElement("div");
        book.classList.add("block");

        const bookName = document.createElement("p");
        bookName.id = "nome livro";
        bookName.innerHTML = BookList[i].nome;

        const bookYear = document.createElement("p");
        bookYear.id = "ano";
        bookYear.innerHTML = BookList[i].ano;

        book.appendChild(bookName);
        book.appendChild(bookYear);
        bookGrid.appendChild(book);
    }
}

