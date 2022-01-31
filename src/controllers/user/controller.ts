import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

class Users {
    get(req: Request, res: Response, next: NextFunction) {
        const users = [
            {
                name: "vishvjeet",
                designation: "developer",
                location: "noida",
            },
            {
                name: "ankush",
                designation: "manager",
                location: "Delhi",
            },
            {
                name: "akash",
                designation: "data analyst",
                location: "gurgaon",
            },
            {
                name: "kanika",
                designation: "designer",
                location: "bengaluru",
            },
        ];
        return res
            .status(200)
            .send({ message: "Fetched data Successfully", data: users });
    }
    post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const { name, designation, location } = req.body;
        if (!name) {
            return res
                .status(400)
                .send({ message: "required users details", error: "error msg" });
        }
        return res.status(200).send({ message: "users added sucessfully" });
    }
    put = (req: Request, res: Response) => {
        const users = this.rawUserData();
        const requestName = req.params.name;
        const data = this.rawUserData().find((post, index) => {
            if (post.name === requestName) return true;
        });
        data.designation = "Associate Engineer";
        return res
            .status(200)
            .send({ message: "Updated users successfully", data: users });
    };
    rawUserData = () => {
        const users = [
            {
                name: "vishvjeet",
                designation: "developer",
                location: "noida",
            },
            {
                name: "ankush",
                designation: "manager",
                location: "Delhi",
            },
            {
                name: "akash",
                designation: "data analyst",
                location: "gurgaon",
            },
            {
                name: "kanika",
                designation: "designer",
                location: "bengaluru",
            },
        ];
        return users;
    };
    delete = (req: Request, res: Response) => {
        const trainee = this.rawUserData();
        const requestName = req.params.name;
        const deletedData = this.rawUserData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });
        return res
            .status(200)
            .send({ message: "deleted User successfully", data: deletedData });
    };

    createToken = (req: Request, res: Response) => {
        const { name } = req.body;
        const token = jwt.sign(name, config.secret);
        return res.status(200).send({message: 'Token created successfully', data: { token }, status: 'success'});
      };
}

export default new Users();
