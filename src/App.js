import React from 'react'
import './App.css'
import Search from "./Search";
import BookShelf from "./BookShelf";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/search">
                            <Search bookShelf={this.state.books}/>
                        </Route>
                        <Route path="/">
                            <BookShelf bookShelf={this.state.books}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default BooksApp
