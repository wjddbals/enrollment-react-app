import fetch from 'isomorphic-unfetch';
import maradb from 'mariadb';


export default async (req,res){
    let conn;
    const sql=`select bno,title,userid,date-formay(regdate,"%Y-%m-%d) regdate,` +
        `views from board order by bno desc`;
try {
    conn =await maradb.createConnection(dbconfig);
    const rowData =await conn.query(sql);
    res.status(200).json(err);

}catch (err){


}finally {
    if (conn) await conn.query()

}


};