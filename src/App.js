import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AddForm, NotFound } from 'components';
// import {  } from './components';
import { PostsList,FullPost, HeaderBlock} from 'modules';
// import {useSelector, useDispatcher} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <HeaderBlock 
                title="Hi Rishat"
                description="Welcome to your den"
                imageUrl="https://picsum.photos/1920/600"
              />
        
            <div className="content">   
              <Switch>
                <Route path="/" exact component={()=>(
                  <PostsList />  
                )}/>
                <Route path="/post/:id" exact component={()=>(
                  <FullPost title="A title" createdAt={'' + new Date()}/>
                  )} />
                <Route path="/post/:id/edit" exact component={AddForm} />
                <Route path="*" exact component={NotFound} />
              </Switch>
            

              <div className="container">
                <div className="content">
                  {/* <button type="button" className="btn btn-primary">
                    Add post
                  </button> */}
                  <div className="content">
                    <div className="post-items">
                      {/* <AddForm /  > */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
