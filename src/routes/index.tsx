import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '../components/NoMatch'
import {StoryList} from '../components/story-list/story-list';
import {Story} from '../components/story/story';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={StoryList} />
      <Route path="/item" component={Story} />
      <Route path='/404'component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
