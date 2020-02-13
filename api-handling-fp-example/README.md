# API flow control in FP

## Flow
1. validate required input (only when calling Post Method)
2. call fetch
3. if response succeed, validate if it has "data" field, then pick "data" from response
   1. if it does not have "data" field, throw error
   2. if response failed, throw error


## API Responses

### getAllEmployees
method: GET
```
{
  "status": "success",
  "data": [
    {
      "id": "1",
      "employee_name": "Tiger Nixon",
      "employee_salary": "320800",
      "employee_age": "61",
      "profile_image": ""
    },
    ....
  ]
}
```

### createEmployee
method: POST
```
{
  "status": "success",
  "data": {
      "name": "test",
      "salary": "123",
      "age": "23",
      "id": 25
  }
}
```