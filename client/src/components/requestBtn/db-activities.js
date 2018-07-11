function fetchNearestLaundry(db, coordinates, callback) {
    db.collection('laundryData').createIndex({
        "location": "2dsphere"
    }, function() {
        db.collection("laundryData").find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coordinates
                    },
                    $maxDistance: 10000
                }
            }
        }).toArray(function(err, results) {
            if(err) {
                console.log(err)
            }else {
                callback(results);
            }
        });
    });
}
exports.fetchNearestLaundry = fetchNearestLaundry;