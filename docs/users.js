module.exports = {
    paths: {
      '/users/getAll': {
        get: {
          tags: {
            Users: 'Get Users'
          },
          description: 'Get users',
          operationId: 'getUsers',
          parameters: [],
          responses: {
            200: {
              description: 'Users were obtained',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/user'
                  }
                }
              }
            }
          }
        }
      },
      '/users': {
        post: {
          security: [{ ApiKeyAuth: [] }],
          tags: ['User'],
          description: 'Create user',
          operationId: 'createUser',
          parameters: [],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/userCreate'
                }
              }
            }
          },
          responses: {
            201: {
              description: 'Product created successfully'
            },
            500: {
              description: 'Server error'
            }
          }
        }
      }
    }
  };
  