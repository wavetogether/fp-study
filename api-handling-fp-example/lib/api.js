export const getUrl = (type, param = {}) => {
  switch (type) {
    case urlTypes.GET_ALL_EMPLOYEE: return "http://dummy.restapiexample.com/api/v1/employees";
    case urlTypes.CREATE_A_EMPLOYEE: return "http://dummy.restapiexample.com/api/v1/create"
    default: return new Error('url type needed');
  }
}

export const urlTypes = {
  GET_ALL_EMPLOYEE: "GET_ALL_EMPLOYEE",
  CREATE_A_EMPLOYEE: "CREATE_A_EMPLOYEE"
}