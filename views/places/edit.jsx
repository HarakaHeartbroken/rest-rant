const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Update a Caster</h1>
                <form method="POST" action="/places/${data.id}?_method=PUT">
                    <div className="form-group">
                        <label htmlFor="name">Caster Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Caster Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.picture}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Techniques</label>
                        <input className="form-control" id="techniques" name="techniques" value={data.place.techniques} required />
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Caster" />
                        </form>
            </main>
        </Def>
    )
}

module.exports = edit_form