import React from 'react';

type TState = {
  theme: 'DARK' | 'LIGHT',
  toggleTheme(): void;
}

type TProps = {
  onChange(): void;
}

// Default values for components used outside provider
const Context = React.createContext({
  theme: 'DARK',
  toggleTheme() {},
})

class Compound extends React.PureComponent<TProps, TState> {

  static Title = (props: any) => (
    <Context.Consumer>
      {({theme}) => (
        <h1 style={{color: theme === 'DARK' ? 'black' : 'red'}}>{props.children}</h1>
      )}
    </Context.Consumer>
  )
 
  static Button = (props:any) => (
    <Context.Consumer>
      {({toggleTheme}) => (
         <button onClick={toggleTheme}>{props.children}</button>
      )}
    </Context.Consumer>
  )

  toggleTheme = () => {
    this.setState((prevState) => ({theme: prevState.theme === 'DARK' ? 'LIGHT' : 'DARK'}), () => {
      this.props.onChange();
    });
  }

  state:TState = {
    theme: 'DARK',
    toggleTheme: this.toggleTheme,
  } 

  render() {
    // provide state to prevent multiple rerendering
    return (
      <Context.Provider value={this.state}>
        {this.props.children }
      </Context.Provider>
    )
  }
}

export default Compound;


// Usage
{/* <Compound>
  <Compound.Title>Title Sample</Compound.Title>
  <Compound.Button>Toggle</Compound.Button>
</Compound> */}