let mysql=requir ('mysql');
let db={}
db.connection=function(){
    let conn=mysql.connection({
        host:"localhost",
        user:"root",
        password:"******",
        database:"book",
        port:"3306"
    })
    conn.connection(function(err){
        if(err){
            console.log(err);
            return ;
        }
    })
    return this.connection;
}
module.exports=db