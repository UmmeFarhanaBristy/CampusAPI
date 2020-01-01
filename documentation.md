# CampusAPI

CampusAPI can be used for showing some informations about some users who are basically students. One can easily do the operation of create, read, update and delete
operation on them.

## Student information Collection [/campus/user]

### List All student information [GET]

This action will show this list of the products that the database contains.

+ Response 200 (application/json)

[
    {
        "_id": "5e0cc5d172e77838a435621d",
        "name": "Bristy",
        "session": "2017-18",
        "department": "CSE",
        "createdAt": "2020-01-01T16:16:17.301Z",
        "updatedAt": "2020-01-01T16:16:17.301Z",
        "__v": 0
    },
    {
        "_id": "5e0cc76972e77838a435621f",
        "name": "Maisha",
        "session": "2017-18",
        "department": "CSE",
        "createdAt": "2020-01-01T16:23:05.703Z",
        "updatedAt": "2020-01-01T16:24:43.540Z",
        "__v": 0,
        "student_id": "1815466222"
    }
]
### Create a New User [POST]
 
You may create your own user using this action. It takes a JSON object containing the followings-
    1. name
    2. student_id
    3. session
    4. department

+ Request (application/json)
  
    {
        "name": "Maisha",
        "student_id": "1815466222",
        "session" : "2017-18",
        "department": "CSE"
    }

+ Response 201 (application/json)

    + Headers

            Location: /questions/5de689cca12dbb00048a5109

    + Body

    {
        "_id": "5e0cc76972e77838a435621f",
        "name": "Maisha",
        "session": "2017-18",
        "department": "CSE",
        "createdAt": "2020-01-01T16:23:05.703Z",
        "updatedAt": "2020-01-01T16:24:43.540Z",
        "__v": 0,
        "student_id": "1815466222"
    }
        
### Update an Existing User [PUT]

The update of an existing user can be done through this action. As the put function is implemented for this action, the whole information of that user will be changed and this will be done using the id of that user.

+ Request (application/json)

    {
        "name": "Maisha",
        "student_id": "1815466222",
        "session" : "2017-18",
        "department": "CSE"
    }

+ Response 200 (application/json)

    + Headers

            Location: /questions/5e0cc76972e77838a435621f

    + Body

        {
            "_id": "5e0cc76972e77838a435621f",
            "name": "Maisha",
            "session": "2017-18",
            "department": "CSE",
            "createdAt": "2020-01-01T16:23:05.703Z",
            "updatedAt": "2020-01-01T16:24:43.540Z",
            "__v": 0,
            "student_id": "1815466222"
        }
        
### Delete an Existing User [DELETE]

Any existing user can be deleted through this action using the id of the user. If this action is made then the whole information of that user will be deleted.

using the id: 5e0cc76972e77838a435621f

+ Request (application/json)

        {
            "name": "Maisha",
            "student_id": "1815466222",
            "session": "2016-17"-
            "department": "CSE"
        }


+ Response 200 (application/json)

    + Headers

            Location: /questions/5e0cc76972e77838a435621f


    + Body
            {
                "message": "User deleted successfully!"
            }
