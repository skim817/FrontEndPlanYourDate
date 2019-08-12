import * as React from "react";
import Header from "./componenets/Header/Header";

interface IState{
  videoList: any
}

class App extends React.Component<{},IState>{



  public render() {
     

    return (
      
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
