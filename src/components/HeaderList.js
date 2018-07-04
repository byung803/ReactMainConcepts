import React, { Component } from 'react';
import HeaderItem from './HeaderItem';

class HeaderList extends Component {
    state = {
        items: [
            'HelloWorld',
            'IntroducingJSX',
            'RenderingElements',
            'ComponentsAndProps',
            'StateAndLifecycle',
            'HandlingEvents',
            'ConditionalRendering',
            'ListsAndKeys',
            'Forms',
            'LiftingStateUp',
            'CompositionVsInheritance',
            'ThinkingInReact'
        ]
    };

    render() {
        return (
            <div>
                목차
                {this.state.items.map((item, index) => {
                    return (
                        <HeaderItem key={index} item={item} />
                    );
                })}

            </div>
        );
    }
}

export default HeaderList;