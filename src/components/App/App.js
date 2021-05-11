import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headertext: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        console.log(name('cloud'));
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headtext={this.state.headertext}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

export default App;
