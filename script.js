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
});


function validateForms()
{
    const inputName = document.getElementById("bookName").value;
    const inputNum = document.getElementById("year").value;

    for(let i = 0; i < BookList.length; i++)
    {
        if(BookList[i].nome == inputName)
        {
            alert("Book already added");
            return false;
        }
    }

    if(inputName.length > 25)
    {
        alert("Insira um nome de ate 25 caracteres!");
        return false;
    }
    else if(inputName.length == 0)
    {
        alert("Insira um nome!");
        return false;
    }
    else if(inputNum.length > 10)
    { 
        alert("Insira um ano de ate 10 caracteres!");
        return false;
    }
    else if(inputNum.length == 0)
    { 
        alert("Insira um ano!");
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
        bookName.classList ="nome Livro";
        bookName.innerHTML = "Name:<br>\"" + BookList[i].nome + "\"";

        const bookYear = document.createElement("p");
        bookYear.classList = "ano";
    
        bookYear.innerHTML ="Year: <br>" + BookList[i].ano;

        if(BookList[i].ano < 0)
        {
            bookYear.innerHTML ="Year<br>" +BookList[i].ano *-1 + " B.C.";
        }
        else if(BookList[i].ano =="-0")
        {
            bookYear.innerHTML ="Year: <br>0"      
        }

        // colocando os tags nos seus devidos lugares

        book.appendChild(bookName);
        book.appendChild(bookYear);
        bookGrid.appendChild(book);

        //atualizando a quantidade de livros
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

