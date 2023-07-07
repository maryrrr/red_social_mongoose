module.exports = {
    components: {
      securitySchemes: {
        ApiKeyAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header"
            }
        },
    schemas: {
    
        user: {
          type: 'object',
          properties: {
              _id: {
              type: 'string',
              description: 'product identification number',
              example: '6201064b0028de7866e2b2c4'
          },
          name: {
            type: 'string',
            description: 'user name',
            example: 'Maria'
          },
          email: {
            type: 'string',
            description: 'email description',
            example: 'maria@gmail.com'
          },
          password: {
            type: 'string',
            description: 'pass description',
            example: '123456'
          },
          userCreate:{
            type:'object',
            properties:{
              name:{
              type:'string',
              description:"User's name",
              example:"Dumi"
            },
            
            email:{
              type: "string",
              description: "Email of user",
              example: "dumi@gmail.com"
          },
          password:{
            type: "string",
            description: "Password of user",
            example: "789456"
                    },
                  },
          required: ['name', 'email', 'password'],
                },
              },
            },
         },
      },
    }