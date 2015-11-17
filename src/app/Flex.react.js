import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Sidebar from './Sidebar.react.js';
import Navbar from './Navbar.react.js';
import $ from 'jquery';
import hljs from 'highlight.js';

const exHtml = {
row:
`<div class="row">
    <div class="item">
        row
    </div>
    <div class="item">
        row
    </div>
    <div>
        no item
    </div>

    <div class="end">
        <div class="item">
            end item
        </div>
        <div class="item">
            item
        </div>
    </div>
</div>`,

col:
`<div className="col debug" style={{
    height: '300px',
}}>
    <div className="row debug">
        <div className="item s-pad">
            item in col
        </div>
    </div>
    <div className="debug s-pad">
        item
    </div>

    <div className="end">
        <div className="debug s-pad">
            end item
        </div>
    </div>
</div>`,

grid:
`<div className="row debug xs-margin">
    <div className="item grid50 debug">
        row item grid50
    </div>
    <div className="item grid50 debug">
        row item grid50
    </div>
</div>

<div className="row debug xs-margin">
    <div className="item grid20 debug">
        row item grid20
    </div>
    <div className="item grid20 debug">
        row item grid20
    </div>
    <div className="item grid10 debug">
        row item grid10
    </div>
    <div className="item grid50 debug">
        row item grid50
    </div>
</div>

<div className="col debug xs-margin" style={{
  height: '200px',
}}>
  <div className="item grid50 debug">
    col item grid50
  </div>
  <div className="item grid20 debug">
    col item grid20
  </div>
</div>`,

sidebar:
`<div className="content debug" style={{
    height: '600px',
}}>
    <Sidebar/>

    <div>
        hi
    </div>
</div>`,
};

const rowCard = (
    <div className="m-margin card">

        <div className="header row">
            <div className="item s-pad">
                <h4><span className="bold blue2-color">class</span> row</h4>
            </div>
        </div>


        <div className="row">
            <div className="col self-center grid50 m-pad">
                <div className="m-pad">
                    A <i>'row'</i> is simply a flex direction 'row' element, an <i>'item'</i> class
                    can be added to the children elements which will simply align-self center. As you
                    can see below, the element with no <i>'item'</i> class is not aligned.
                    <i>'end'</i> is a class that will align itself to the end of the row.
                </div>

                <div className="row debug">
                    <div className="item s-pad debug">
                        row
                    </div>
                    <div className="col debug" style={{height: '120px'}}>
                      <div className="xs-pad debug">
                        col item
                      </div>
                      <div className="xs-pad debug">
                        col item
                      </div>
                    </div>
                    <div className="s-pad debug">
                        no item class
                    </div>

                    <div className="end">
                        <div className="item s-pad debug">
                            end item
                        </div>
                        <div className="item s-pad debug">
                            item
                        </div>
                    </div>
                </div>
            </div>
            <div className="item grid50 m-pad">
                <div className="grow1">
                    <pre><code className="html">
                        {exHtml.row}
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
);

const colCard = (
    <div className="m-margin card">

        <div className="header row">
            <div className="item s-pad">
                <h4><span className="bold blue2-color">class</span> col</h4>
            </div>
        </div>

        <div className="row">
            <div className="col center self-center grid50 m-pad">
                <div className="m-pad">
                  <i>'col'</i> is a element with flex direction column. As you can see
                  columns can also have rows inside it. You can also have
                  <i>'end'</i> which will align itself to the bottom of the column.
                </div>

                <div className="col debug" style={{
                    height: '300px',
                }}>
                    <div className="row debug">
                        <div className="item s-pad">
                          col item
                        </div>
                    </div>
                    <div className="debug s-pad">
                        col item
                    </div>
                    <div className="row debug" style={{maxWidth: '300px'}}>
                      <div className="item s-pad debug">
                        row item
                      </div>
                      <div className="item s-pad debug">
                        row item
                      </div>
                    </div>

                    <div className="end">
                        <div className="debug s-pad">
                            end item
                        </div>
                    </div>
                </div>
            </div>

            <div className="item grid50 m-pad">
                <div className="grow1">
                    <pre><code className="html">
                        {exHtml.col}
                    </code></pre>
                </div>
            </div>
        </div>

    </div>
);

const gridCard = (
    <div className="m-margin card">

        <div className="header row">
            <div className="item s-pad">
                <h4><span className="bold blue2-color">class</span> grid</h4>
            </div>
        </div>

        <div className="row">
            <div className="col self-center grid50 m-pad">
                <div className="m-pad">
                  Within a row or a col you can have grid items ranging from 5
                  to 100 with intervals of 5. For example <i>grid50</i> will be
                  50%.
                </div>

                {/* Example */}
                <div className="row debug xs-margin">
                    <div className="item grid50 debug">
                        row item grid50
                    </div>
                    <div className="item grid50 debug">
                        row item grid50
                    </div>
                </div>
                <div className="row debug xs-margin">
                    <div className="item grid20 debug">
                        row item grid20
                    </div>
                    <div className="item grid20 debug">
                        row item grid20
                    </div>
                    <div className="item grid10 debug">
                        row item grid10
                    </div>
                    <div className="item grid50 debug">
                        row item grid50
                    </div>
                </div>

                <div className="col debug xs-margin" style={{
                  height: '200px',
                }}>
                  <div className="item grid50 debug">
                    col item grid50
                  </div>
                  <div className="item grid20 debug">
                    col item grid20
                  </div>
                </div>
            </div>

            <div className="item grid50 m-pad">
                <div className="grow1">
                    <pre><code className="html">
                        {exHtml.grid}
                    </code></pre>
                </div>
            </div>
        </div>

    </div>
);

const Flex = React.createClass({

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
        return (
            <div className="m-wwrap m-pad white-bg" style={{
                minHeight: '100%',
            }}>
                <div className="m-margin">
                    <h3>Flex</h3>
                    <hr />

                    <p>
                        There are two types of flex components, 'row' and 'col', these component's childs can also be a flex component.
                    </p>
                </div>

                {rowCard}

                {colCard}

                {gridCard}


                <div className="m-margin" style={{
                    marginTop: '100px'
                }}>
                    <h3>
                        Sidebar
                    </h3>
                    <hr />

                    <p>
                        The sidebar
                    </p>

                    <pre>
                    <code className="html">
                        {exHtml.sidebar}
                    </code>
                    </pre>
                </div>

                <div className="m-margin">
                    <div className="content debug" style={{
                        height: '600px',
                    }}>
                        <Sidebar/>

                        <div>
                            hi
                        </div>
                    </div>
                </div>

                <div className="m-margin">
                    <div className="content scroll-view debug" style={{
                        height: '600px',
                    }}>
                        <Navbar/>

                        <div className="scroll-view">
                            hi
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Flex;
