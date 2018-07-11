db.Ulaundry.find({
    Berkeley: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-122.272747, 37.8715926]
            },
            $minDistance: 0,
            $maxDistance: 10000
        }
    }
}).pretty()

