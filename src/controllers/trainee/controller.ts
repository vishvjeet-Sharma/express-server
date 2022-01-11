import { Request, Response, NextFunction } from "express";

class Trainee {
    get(req: Request, res: Response, next: NextFunction) {
        const trainee = [
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
            .send({ message: "Fetched data Successfully", data: trainee });
    }
    post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const { name, designation, location } = req.body;
        if (!name) {
            return res
                .status(400)
                .send({ message: "required trainee details", error: "error msg" });
        }
        return res.status(200).send({ message: "trainee added sucessfully" });
    }
    put = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const data = this.rawTraineeData().find((post, index) => {
            if (post.name === requestName) return true;
        });
        data.designation = "Associate Engineer";
        return res
            .status(200)
            .send({ message: "Updated trainee successfully", data: trainee });
    };
    rawTraineeData = () => {
        const trainee = [
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
        return trainee;
    };
    delete = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const deletedData = this.rawTraineeData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });
        return res
            .status(200)
            .send({ message: "deleted trainee successfully", data: deletedData });
    };
}

export default new Trainee();
