import './App.css';
function Main(props) {
    const { books } = props;
  
    return (
      <div className="main-content">
        <h1>Welcome to my React App!</h1>
        <p>Check out these amazing books:</p>
        <ul>
          {books.map(book => (
            <li key={book.id}>
             
{
    <div class="card">
  <div class="container">
    <h4><b>{book.title}</b></h4> 
    <p>{book.author}</p> 
    <p>{book.isbn} </p>
  </div>
</div>
}


            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Main;