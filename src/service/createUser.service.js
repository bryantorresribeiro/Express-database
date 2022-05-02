import database from "../database";

const createUserService = async(email, name, password) => {
       try{
              const res = await database.query(
                     "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *",
                     [email, name, password]
              );
              return res.rows[0];
       }catch(err){
              throw new Error(err);
       };
};

export default createUserService;