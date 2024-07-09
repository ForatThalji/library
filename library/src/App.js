import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';


function App() {
  // Define array of books
  const books = [
    {id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030"
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "أبو بكر الرازي",
      isbn: "893847239479"
    },
    {
      id: 3,
      title: "الشفاء",
      author: "ابن سينا",
      isbn: "9780140449358"
    },
    {
      id: 4,
      title: "ألف ليلة وليلة",
      author: "مجهول",
      isbn: "9780345337665"
    },
    {
      id: 5,
      title: "رواية موسم الهجرة إلى الشمال",
      author: "الطيب صالح",
      isbn: "9781859642352"
    },
    {
      id: 6,
      title: "كتاب الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "9789774275623"
    },
    {
      id: 7,
      title: "كليلة ودمنة",
      author: "ابن المقفع",
      isbn: "9780140455205"
    },
    {
      id: 8,
      title: "في ظلال القرآن",
      author: "سيد قطب",
      isbn: "9789953850864"
    },
    {
      id: 9,
      title: "أيام",
      author: "طه حسين",
      isbn: "9789953890754"
    },
    {
      id: 10,
      title: "رواية رجال في الشمس",
      author: "غسان كنفاني",
      isbn: "9789953890716"
    }
  ];

  return (
    <div className="App">
      <Header />
      <Main books={books} />
      <Footer />
    </div>
  );
}

export default App;
