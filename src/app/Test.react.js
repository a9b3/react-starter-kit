import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import $ from 'jquery';
import hljs from 'highlight.js';
import html from 'html';

const examples = [
    {
        title: 'Test',
        blob: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
        velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
        volutpat sit amet.`,
        html: (
            <div className="debug">
                hi watsup
            </div>
        ),
    },
];

const Test = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {
        $('pre code').each((i, block) => {
            hljs.highlightBlock(block);
        });
    },

    componentWillUnmount() {

    },

    render() {
        const rowItemStyle = {
            minWidth: '400px',
        };

        function jsxToString(jsx) {
            const str = renderToStaticMarkup(jsx);
            const prettyFormat = html.prettyPrint(str, {
                indent_size: 2,
            });
            console.log(prettyFormat);
            return prettyFormat;
        }

        let i = 0;
        return (
            <div className="content m-wwrap">

                {examples.map(example => {

                    return (
                        <div className="card m-margin" key={i++}>

                            <div className="header row">
                                <div className="item s-pad">
                                    hi
                                </div>
                            </div>

                            <div className="row">

                                <div className="col s-pad grid50"
                                    style={rowItemStyle}>
                                    <div className="item">
                                        {example.blob}
                                    </div>

                                    <div className="item">
                                        {example.html}
                                    </div>
                                </div>

                                <div className="item s-pad grid50"
                                    style={rowItemStyle}>
                                    <pre style={{
                                        width: '100%',
                                    }}><code className="html" style={{
                                        width: '100%',
                                    }}>
                                        {jsxToString(example.html)}
                                    </code></pre>
                                </div>

                            </div>

                        </div>
                    );

                })}

            </div>
        );
    },

});

export default Test;
