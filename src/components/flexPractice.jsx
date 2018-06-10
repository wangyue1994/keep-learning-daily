import React from 'react'
import style from './flexPractice.less'
var less = require('less');

less.render('.class { width: 1 + 1 }', function (e, css) {
    console.log(css);
})
export default class FlexPractice extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <main style={{background: 'yellow', height: '1000px'}}>
                <header className={style.header}>header</header>
                <nav>nav</nav>
                <article>article1</article>
                <section style={{background: 'pink', height: '100px'}}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </section>
                <footer>footer</footer>
            </main>
        )
    }
}