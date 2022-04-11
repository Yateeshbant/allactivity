import db from '../db/db'

interface queryResponse {
    response: string;
    result: any;
} 
function updateOneById(startdate: Date, enddate: Date, description: string, id: number): Promise<queryResponse> {
    return new Promise((myResolve, myReject) => {
        db.query("UPDATE activity SET startdate=?, enddate=?,description=? WHERE id=?", [startdate, enddate, description, id], (err, r, f) => {
            if (err) return { response: "failed", result: err }
            myResolve({ response: "success", result: "" })
        })
    })
}

function createOne(startdate: Date, enddate: Date, description: string): Promise<queryResponse> {
    return new Promise((myResolve, myReject) => {
        db.query("INSERT INTO activity (startdate,enddate,description) VALUES (?,?,?)", [startdate, enddate, description], (err, r, f) => {
            if (err) return { response: "failed", result: err }
            myResolve({ response: "success", result: "" })
        })
    })
}
function deleteById(id: number): Promise<queryResponse> {
    return new Promise((myResolve, myReject) => {
        let result: queryResponse = { response: "failed", result: "" }
        db.query("DELETE FROM activity WHERE id =?", id, (err, r, f) => {
            if (err) {
                return result.result = err.message
            }
            result.response = 'success'
            result.result = r
            myResolve(result)
        })

    })
}

async function findOneById(id: number): Promise<queryResponse> {
    return new Promise((myResolve, myReject) => {
        let result: queryResponse = { response: "failed", result: "" }
        db.query("SELECT * FROM activity WHERE id = ?", id, (err, r, f) => {
            if (err) {
                return result.result = err.message
            }
            result.response = 'success'
            result.result = r
            myResolve(result)
        })
    })
}

function findMany(): Promise<queryResponse> {
    return new Promise((myResolve, myReject) => {
        let result: queryResponse = { response: "failed", result: "" }
        db.query("SELECT * FROM activity", (err, r, f) => {
            if (err) {
                console.log("error is ", err)
                return result.result = err.message
            }
            result.response = 'success'
            result.result = r
            myResolve(result)
        })
    });
}

export default { createOne, deleteById, findOneById, findMany ,updateOneById}