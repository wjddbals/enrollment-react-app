import Board from "../../../models/Board";

export default async (req,res) => {
    const {title,userid,contents}=req.body; //body로 받아와서
    console.log(title,userid,contents);
    try {
        //
       const cnt= Board.newOne( title,userid,contents).insert()
            .then(result=result);
       console.log(await cnt);

        res.status(200).json({cnt:await cnt});
    }catch (err){
        res.status(500).json(err);

    }
}