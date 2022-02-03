const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
        <main>
            <h1>{ data.place.name }</h1>
            <div className="row">

                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>

                <div className="col-sm-6">
                    <h2>Description</h2>
                    <h3>{data.place.showDiscovered()}</h3>
                    <h4>Practicing {data.place.techniques}</h4>
                </div>
            </div>

            
            <h2>Currently Unrated</h2>
            <h2>No Comments Yet!</h2>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form methid="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}

<Def>
  <main>
    
  </main>
</Def>

module.exports = show