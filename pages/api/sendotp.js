import dbConnect from "@/lib/dbConnect";

export default function handler(req, res) {


    dbConnect()

res.status(200).json(req.body)

}