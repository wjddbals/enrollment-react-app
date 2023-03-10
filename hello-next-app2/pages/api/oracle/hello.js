
import oracledb from 'oracledb';
try {
    oracledb.initOracleClient({libDir:'c:Java/instantclient_19_17'});
}catch (e){

}


const dbconfig ={
    connectString:process.env.ORACLE_HOST,
    user:process.env.ORACLE_USER,
    password:process.env.ORACLE_PWD,


};

export default async (req, res) => {
    let conn;
    try {

        conn=await oracledb.getConnection(dbconfig);
        const reseult = await conn.execute('select 10+5 as answer from dual');
       res.status(200).json(reseult); //json으로 응답

       // const rowdata =await conn.query('select * from newbooks');//뉴북에 있는 데이타 모두 꺼내오기

        //정상처리후 응답;상태코드200, 조회결과 반환 브라우저에게 지시하는 코드이다
      //  res.status(200).json(rowdata);
    } catch (err) {
        console.log(err);

        //처리실패시 응답:상태코드500 오류메세지 반환
        res.status(500).json(err);
    } finally {
        if (conn) await conn.close();
    }


}
