const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add A New Caster</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Caster Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Caster Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Techniques</label>
                        <input className="form-control" id="techniques" name="techniques" required />
                    </div>
                    <div className="form-group">
                        <label for="discovered">Discovered Year</label>
                        <input 
                            className="form-control" 
                            id="discovered" 
                            name="discovered"
                            type="number"
                            value={new Date().getFullYear()} />
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Caster" />
                        </form>
            </main>
        </Def>
    )
}

module.exports = new_form