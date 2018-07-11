
var dbActivities = require('./db-Activities');

function initialize(app, db) {

    app.get('/laundry', function(req, res){
        
        //Convert the query strings into Numbers
        var latitude = Number(req.query.lat);
        var longitude = Number(req.query.lng);
        dbOperations.fetchNearestLaundry(db, [longitude,latitude], function(results){
        //return the results back to the client in the form of JSON
            res.json({
                laundry: results
            });
        });  
    });
}
exports.initialize = initialize;