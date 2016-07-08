import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../ui/containers/MainLayout.jsx';
import Home from '../ui/pages/Home.jsx';
import App from '../ui/components/App.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';

FlowRouter.route('/', {
  name: 'Main',
  action() {
    mount(MainLayout, {
      children: <App /> 
    })
  }
});

