const React = require('react')
const Def = require('./default')

function home () {
   return (
       <Def>
           <main>
               <h1>BEWARE, I AM SINNISTAR! THIS IS THE HOME PAGE VIEW!</h1>
               <a href="/places">
                   <button className="btn-primary">Places Page</button>
               </a>
           </main>
       </Def>
   )
}

module.exports = home