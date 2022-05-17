export default {

    healthCheck : async (req, res) => {
        return res.status(200).send({message: "All its Ok, Product Service :)" });
    }
}
