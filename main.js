const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000
app.use(express.json());

app.get("/user", function (req, res) {
    res.json({
        message: " success get data",
        nama: "rindi"
    })
})

app.post("/user-post", function(req, res) {
const {alamat, cita_cita} = req.body;

res.json({
    message: "success post data",
    alamat: alamat,
    cita_cita: cita_cita,
})
})

app.put("/user-put", function (req, res) {
    const {nama, umur} = req.body;

    res.json({
        message: "success put data",
        nama: nama,
        umur: umur,
    })
    
})

app.delete("/user-delete", function (req, res) {
    res.json({
        message: "success delete data",
        nama: "rindi",
        hoby: "nonton film drakor"
    })
})

app.listen(port, () => {
    console.log(`Eserver berjalan di http://localhost:${port}`)
})
