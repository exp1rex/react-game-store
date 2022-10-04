import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Call of Duty: Modern Warfare II",
          img: "call-of-dutty-mw-2.jpeg",
          desc: "Предстоящая компьютерная игра в жанре шутер от первого лица, разрабатываемая Infinity Ward, издателем выступит Activision. Это сиквел Call of Duty: Modern Warfare 2019 года, а также девятнадцатая часть в серии.",
          category: "fps",
          price: "59.99",
        },
        {
          id: 2,
          title: "The Last of Us",
          img: "the-last-of-us.jpg",
          desc: "Действие игры происходит в постапокалиптическом будущем на территории бывших Соединённых Штатов Америки спустя двадцать лет после глобальной пандемии, вызванной опасно мутировавшим грибком кордицепс. Сюжет посвящён путешествию главных героев — контрабандиста Джоэла и девочки-подростка Элли.",
          category: "action-adventure, stealth-action",
          price: "39.00",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
