import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import BookShelf from "./BookShelf";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class BooksApp extends React.Component {

    // TODO: figure out how to rerender after an update.
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/search">
                            <Search/>
                        </Route>
                        <Route path="/">
                            <BookShelf/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default BooksApp
