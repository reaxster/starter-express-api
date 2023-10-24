const express = require('express')
const app = express()

const config = {
"mta-sts.hospitality-ut.com": 
`version: STSv1
mode: testing
mx: alt4.aspmx.l.google.com
mx: alt2.aspmx.l.google.com
mx: alt3.aspmx.l.google.com
mx: aspmx.l.google.com
mx: alt1.aspmx.l.google.com
max_age: 604800`
}
const hostname = "mta-sts.hospitality-ut.com"

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send("Page is a parked domain for MTA ONLY!")
})

app.get('/.well-known/mta-sts.txt', (req, res) => {
    res.set({
        "Content-Type": "text/plain;charset=UTF-8", // ==> new header
    })
  res.send(config[hostname])
})

app.listen(process.env.PORT || 3000)
