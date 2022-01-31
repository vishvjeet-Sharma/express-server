import { Router } from 'express';
import UserRoutes  from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { Users } from '../../../extraTs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *        User:
 *             properties:
 *                  _id:
 *                       type: string
 *                  id:
 *                       type: string
 *                  originalId:
 *                       type: string
 *                  name:
 *                       type: string
 *                  email:
 *                       type: string
 *                       format: email
 *                  password:
 *                       type: string
 *                  createdAt:
 *                       type: string
 *                  deletedAt:
 *                       type: string
 *        Users:
 *             type: array
 *             items:
 *                  type: string
 *             $ref: '#/components/schemas/User'
 *        UserListResponse:
 *             properties:
 *                  message:
 *                       type: string
 *                       example: Success
 *                  status:
 *                       type: integer
 *                       example: 200
 *                  data:
 *                       $ref: '#/components/schemas/Users'
 *        UserByIdGetResponse:
 *             properties:
 *                  message:
 *                       type: string
 *                       example: Success
 *                  status:
 *                       type: integer
 *                       example: 200
 *                  data:
 *                       $ref: '#/components/schemas/Users'
 */
 router
 .post('/createtoken', UserRoutes.createToken)

/**
* @swagger
* /user/createtoken:
*  post:
*      tags: [USER]
*      requestBody:
*          description: Enter email and password to create/generate authorization token.
*          required: true
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      required:
*                          - email
*                          - password
*                      properties:
*                          email:
*                              type: string
*                              example: Vishvjeet@successive.tech
*                          password:
*                              type: string
*                              example: Vishvjeet@123
*      security:
*          - bearerAuth: []
*      responses:
*          200:
*              description: Token created successfully!
*          403:
*              description: User does not exists!
*/



 .get('/', authMiddleWare(Users, 'read'), validationHandler(validation.get), UserRoutes.getAll)

/**
* @swagger
* /user:
*   get:
*        tags: [USER]
*        description: Returns all the userS
*        produces:
*             - application/json
*        security:
*             - bearerAuth: []
*        responses :
*             200:
*                  description: Array of user
*                  schema:
*                       $ref: '#/definitions/userSchemas'
*/

 .post('/', authMiddleWare(Users, 'write'), validationHandler(validation.post), UserRoutes.create)

/**
* @swagger
* /user:
*  post:
*      tags: [USER]
*      requestBody:
*          description: Enter details of user to create data.
*          required: true
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      required:
*                          - name
*                          - role
*                          - email
*                          - password
*                      properties:
*                          name:
*                              type: string
*                              example: "Anurag"
*                          role:
*                              type: string
*                              example: Trainer
*                          email:
*                              type: string
*                              example: venom@successive.tech
*                          password:
*                              type: string
*                              example: QWERTY123
*      security:
*          - bearerAuth: []
*      responses:
*          200:
*              description: User created successfully!
*          403:
*              description: UnResolved Error
*/

 .put('/', authMiddleWare(Users, 'write'), validationHandler(validation.put), UserRoutes.update)

/**
* @swagger
* /user:
*  put:
*      tags: [USER]
*      requestBody:
*          description: Enter OriginalId of user to update.
*          required: true
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      required:
*                          - originalId
*                          - name
*                          - role
*                          - email
*                      properties:
*                          originalId:
*                              type: string
*                              example: 614ac5c9ee0df9a6a1545bce
*                          name:
*                              type: string
*                              example: Venom
*                          role:
*                              type: string
*                              example: Trainer
*                          email:
*                              type: string\
*                              example: venom@successive.tech
*      security:
*          - bearerAuth: []
*      responses:
*          200:
*              description: User Updated successfully!
*          403:
*              description: UnResolved Error
*/

 .delete('/', authMiddleWare(Users, 'delete'), validationHandler(validation.delete), UserRoutes.delete)

/**
* @swagger
* /user:
*  delete:
*      tags: [USER]
*      requestBody:
*          description: Enter OriginalId of user to delete.
*          required: true
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      required:
*                          - originalId
*                      properties:
*                          originalId:
*                              type: string
*                              example: 614ac5c9ee0df9a6a1545bce
*      security:
*          - bearerAuth: []
*      responses:
*          200:
*              description: User Deleted successfully!
*          403:
*              description: UnResolved Error
*/


export default router;