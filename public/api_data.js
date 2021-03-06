define({ "api": [
  {
    "type": "post",
    "url": "/applications",
    "title": "",
    "group": "Applications",
    "name": "CreateApplications",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Application",
            "description": "<p>Anewly created Application object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/application",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can apply for the Job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"asdsdghgwg4rht32sd\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "JobId",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/application.controller.js",
    "groupTitle": "Applications"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "CreateCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>A newly created Company Object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can register new company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"asdsdghgwg4rht32sd\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "UserId",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "GetCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>List of Companies with Jobs</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can view all the companies</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"asdsdghgwg4rht32sd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "GetJobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Job",
            "description": "<p>List of Jobs with Candidates</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can view all the jobs</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"asdsdghgwg4rht32sd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "createJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>User must need to provide job title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CompanyId",
            "description": "<p>User must need to provide the CompanyId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"title\": \"Node.js developer\",\n \"CompanyId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Job",
            "description": "<p>A newly created job object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response:",
          "content": "{\n \"id\" : 1,\n \"CompanyId\": 1,\n \"title\": \"Node.js developer\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can create new job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\": \"asdsdghgwg4rht32sd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "Users",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user must need to provide</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password12\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<p>A Json web token to access proceted route</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response:",
          "content": "{\n \"token\": \"ASDASDGWRTFHGSDF\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login to the system</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "signupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user must need to privided the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must to privide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Email Field : ",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password12\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup successfull!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response : ",
          "content": "HTTP/1.1 200Ok\n{\n \"msg\": \"signup Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create new account</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
