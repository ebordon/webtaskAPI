Web task API assignment from Tango Code

# Prequisites

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* Git


# Installation

```
git clone https://github.com/ebordon/webtaskAPI.git
cd webtaskAPI
npm install
```

# Run the server

```
npm run start
```

The web server runs in http://localhost:5000

# Add Data

Use Postman or some browser plugin for manage web requests in order to add data to the database;

The request has to be with the following parameters:

* Method: POST
* URL: http://localhost:5000/cars
* Set the header `Content-Type: application/json`.
* Add a valid json to the body.

An example of a valid json for the body is:

```
{
  "__v": 0,
  "name": "Ford Focus",
  "sale_details": {
      "min_price": 6000,
      "max_price": 8000,
      "item_number": "1395p",
      "vin": "3GNDA13D96S631406"
  },
  "publication_stats": {
      "views": 45,
      "shares": 22,
      "saves": 9
  },
  "car_details": {
    "general": {
          "year": "2012",
          "milleage": "200,000"
    },
    "exterior": {
        "color": "blue",
        "doors": 5,
        "chassis": "ok",
        "painting": "ok"
    },
    "performance": {
        "cylinders": "L4",
        "city_mpg": 20,
        "highway_mpg": 25,
        "engine": "1.3"
    }
  },
    "pictures": ["https://drop.ndtv.com/albums/AUTO/tata_tigor_review/tigorgallerythumb_281817_181809_4088_640x480.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ezPFeqbhrhn4CLQvdlErofISKvmUEUQr10nbAxRKobrk_3zi",
                  "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/focus/2017/collections/Interior_Gallery/3-2/fcs17_pg_int_015.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2-ql-BeJnma0NczmbTI517PFBF6CJgEFaUVITtFllOVqpScC",
                  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/ford-focus-rear_0.jpg?itok=J6l_pWe4",
                  "https://di-uploads-pod1.s3.amazonaws.com/joerizzafordorlandpark/uploads/2015/03/2015-ford-focus-interior13.jpg"]
}
```

# Retreive car list

To retrieve the car list just enter this url in the browser `http://localhost:5000/cars`

# Retreive Details of a car

Go to `http://localhost:5000/cars/<car_id>` in the web browser.
