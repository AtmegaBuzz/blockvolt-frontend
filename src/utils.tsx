import { sha256 } from 'multiformats/hashes/sha2'
import { CID } from 'multiformats/cid'



export async function generateCIDFromString(data: string) {
    
    // const data = readFileSync('z')
    const bytes = new TextEncoder().encode(data)
    const hash = await sha256.digest(bytes)

    const cid = CID.create(1, 0x55, hash)
    
    return cid.toString()
}

// Example usage
// const inputString = '{"Time":"2024-05-08T19:04:55","ANALOG":{"Temperature1":-54.5},"ENERGY":{"TotalStartTime":"2024-05-06T08:00:28","Total":0.000,"Yesterday":0.000,"Today":0.000,"Power":0,"ApparentPower":0,"ReactivePower":0,"Factor":0.00,"Voltage":0,"Current":0.000},"TempUnit":"C"}';
// generateCID(inputString)
//     .then(cid => {
//         console.log("CID:", cid);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
