import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Items } from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eligendi ipsam! Enim suscipit molestias aspernatur tempore temporibus repellendus mollitia hic officia eum amet, illum numquam architecto, quaerat a quam doloremque.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стул синий",
          img: "",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eligendi ipsam! Enim suscipit molestias aspernatur tempore temporibus repellendus mollitia hic officia eum amet, illum numquam architecto, quaerat a quam doloremque.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 3,
          title: "Стул красный",
          img: "",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eligendi ipsam! Enim suscipit molestias aspernatur tempore temporibus repellendus mollitia hic officia eum amet, illum numquam architecto, quaerat a quam doloremque.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 4,
          title: "Стул зеленый",
          img: "",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eligendi ipsam! Enim suscipit molestias aspernatur tempore temporibus repellendus mollitia hic officia eum amet, illum numquam architecto, quaerat a quam doloremque.",
          category: "chairs",
          price: "49.99",
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
